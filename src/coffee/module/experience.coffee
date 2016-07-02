define (require, exports, module) ->
    "use strict"

    Raphael = require("Raphael")

    Experience =
        init: ->
            # window.Raphael = Raphael
            timeline = new Raphael(document.getElementById("experienceTimeLine"), 900, 600)
            experience = [
                [200, 15, "#97BE0D", "2009.09 - 2013.07，武汉", "华中科技大学 本科", "自动化"]
                [300, 15, "#88B8E6", "2013.11 - 2014.08，上海", "最搭配", "前端开发工程师"]
                [400, 15, "#88B8E6", "2014.08 - 至今，杭州", "阿里巴巴","前端开发工程师"]
            ]
            category = [
                ["#97BE0D", 400, "学习"]
                ["#88B8E6", 530, "工作经历"]
            ]
            pathStyle = {
                "fill": "none"
                "stroke-dasharray": "- "
                "stroke": "#ccc"
                "stroke-width": 1
            }
            textStyle = {
                "font-size": 16
                "fill": "#898989"
                "text-anchor": "start"
            }
            animation = ->
                timeline.path("M300 130 L 300 130")
                    .attr(pathStyle)
                    .animate({path: "M300 130 L 300 800 l 300 800"}, 1e3, "backOut")
                for exp in experience
                    timeline.circle(300, 1500,exp[1])
                        .attr({stroke: "none", fill: exp[2]})
                        .animate({cy: exp[0]}, 1e3 + 1e3 * Math.random(), "backOut")
                        .hover( ->
                            this.animate({r: exp[1] * 1.5}, 500, "bounce")
                        , -> this.animate({r: exp[1]}, 500, "bounce"))
                    timeline.text(360, 1500, exp[3])
                        .attr(textStyle)
                        .animate(Raphael.animation({y: exp[0]}, 1e3, "backOut").delay(1e3))
                    timeline.text(360, 1500, exp[4])
                        .attr(textStyle)
                        .animate(Raphael.animation({y: exp[0] + 25}, 1e3, "backOut").delay(1e3))
                    timeline.text(360, 1500, exp[5])
                        .attr(textStyle)
                        .animate(Raphael.animation({y: exp[0] + 50}, 1e3, "backOut").delay(1e3))

            # Start Drawing
            timeline.text(0, 95, "1991年6月，出生").attr(textStyle)
            timeline.path("M 130 95 L 170 95 176 95 182 95 188 95 260 95 300 95 385 95")
                .attr(pathStyle)
                .animate({path: "M 130 95 L 170 95 176 88 182 105 188 95 260 95 300 130 385 45"}, 1e3, "bounce", animation)
            for cate in category
                timeline.circle(cate[1], 30, 10).attr {
                    stroke: "none"
                    fill: cate[0]
                }
                timeline.text(cate[1] + 25, 30, cate[2]).attr(textStyle)

    module.exports = Experience