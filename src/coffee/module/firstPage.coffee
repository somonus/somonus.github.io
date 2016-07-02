define (require, exports, module) ->
    "use strict"
    
    TweenMax = require("TweenMax")
    SplitText = require("SplitText")
    Experience = require("./experience")
    Skill = require("../../asset/skill.js")

    firstPage =
        init: ->
            @fp = $("#first-page")
            @screenHeight = @get_screen_height()
            @reset_height()
            $(document).scrollTop(0)
            @animation()
            @event_bind()
        get_screen_height: ->
            return if window.orientation? and Math.abs(window.orientation) is 90 then window.innerWidth else window.innerHeight
        reset_height: -> @fp.height(@screenHeight)
        event_bind: ->
            $(window).resize =>
                newHeight = @get_screen_height()
                if @screenHeight isnt newHeight
                    @screenHeight = newHeight
                    @reset_height()
            @sl.mouseenter => @scrollLabel.pause()
            @sl.mouseout => @scrollLabel.resume()
            @sb.mouseenter => @scrollBack.pause()
            @sb.mouseout => @scrollBack.resume()
            @isScrolling = false
            @sl.click => @scroll_down()
            @sb.click -> $("body").animate {
                scrollTop: 0
            }, 2000
            # #判断手机是横屏还是竖屏
            # window.addEventListener "orientationchange", resize if window.orientation?
            old_scroll = $(window).scrollTop()
            $(window).scroll =>
                new_scroll = $(window).scrollTop()
                if new_scroll - old_scroll <= 0
                    old_scroll = new_scroll
                    return
                if old_scroll isnt 0
                    old_scroll = new_scroll
                    return
                old_scroll = new_scroll
                @scroll_down()
        scroll_down: ->
            return if @isScrolling
            @isScrolling = true
            self = @
            $("body").animate {
                scrollTop: @get_screen_height()
            }, 1000, ->
                self.isScrolling = false
                if $(".experience-wrap").attr("init") is "false"
                    $(".experience-wrap").attr("init", "true")
                    Experience.init()
                    Skill.init()
                    $(".skillsList li").hover( ->
                        e = "arc-" + $(this).text().toLowerCase()
                        $("#" + e).trigger("mouseover")
                    , ->
                        e = "arc-" + $(this).text().toLowerCase()
                        $("#" + e).trigger("mouseout")
                    )

        animation: ->
            heading = @fp.find(".heading")
            content = @fp.find(".content p")
            headingSplit = new SplitText(heading, {type:"words, chars"})
            contentSplit = new SplitText(content, type: "words, chars")
            heading.show()
            @fp.find(".content").show()
            TweenMax.staggerFrom headingSplit.chars, 2, {
                opacity: 0
                scale: 0
                y: 80
                rotationX: 180
                transformOrigin: "0% 50% -50"
                ease: Back.easeOut
            }, 0.01, -> headingSplit.revert()
            TweenMax.staggerFrom contentSplit.chars, 1, {
                opacity: 0
                scale: 0
                y: 80
                rotationX: 90
                transformOrigin: "0 50% -50"
                ease: Back.easeOut
            }, 0.2, -> contentSplit.revert()
            @sl = @fp.find(".scroll-label")
            @sl.show()
            @scrollLabel = TweenMax.fromTo @sl, 1, {
                opacity: 0
                scale: 0
                y: -40
            }, {
                opacity: 0.8
                scale: 1
                y: 0
                delay: 0.5
            }
            @scrollLabel.repeat(-1).repeatDelay(0.5).play()
            @sb = $(".scroll-back i")
            @scrollBack = TweenMax.fromTo @sb, 1, {
                opacity: 0
                scale: 0
                y: 40
            }, {
                opacity: 0.8
                scale: 1
                y: 0
            }
            @scrollBack.repeat(-1).repeatDelay(0.5).play()

    module.exports = firstPage