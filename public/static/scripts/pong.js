var pongActive = true;
const pongGame = () => {
        var e =
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                function (e) {
                    window.setTimeout(e, 1e3 / 60);
                },
            t = document.createElement("canvas");
        t.setAttribute("id", "js-game");
        (t.width = 400), (t.height = 600);
        var i = t.getContext("2d"),
            n = new k(),
            s = new v(),
            d = new T(200, 300),
            o = new F(),
            h = new c(),
            r = new w(),
            p = new _(),
            l = new m();
        let a = 0,
            y = 0;
        var u = {};
        $(".js-replay").click(function (t) {
            t.preventDefault(),
                (a = 0),
                (y = 0),
                $(".c-pong__button").removeClass("c-pong__button--visible"),
                (f = function () {
                    (i.fillStyle = "#142C69"),
                        i.fillRect(0, 0, 400, 600),
                        n.render(),
                        s.render(),
                        d.render(),
                        o.render(),
                        h.render(),
                        (w.prototype.render = function () {
                            i.moveTo(10, 300),
                                i.lineTo(390, 300),
                                (i.strokeStyle = "#FFFFFF"),
                                i.stroke();
                        }),
                        r.render();
                }),
                e(x);
        });
        let f = function () {
            (i.fillStyle = "#142C69"),
                i.fillRect(0, 0, 400, 600),
                n.render(),
                s.render(),
                d.render(),
                o.render(),
                h.render(),
                r.render();
        };
        var x = function () {
            return (
                n.update(),
                s.update(d),
                d.update(n.paddle, s.paddle),
                f(),
                e(x),
                y >= 5
                    ? ($(".c-pong__button").addClass("c-pong__button--visible"),
                      l.render(),
                      (w.prototype.render = function () {
                          i.moveTo(10, 300),
                              i.lineTo(390, 300),
                              (i.strokeStyle = "#142C69"),
                              i.stroke();
                      }),
                      r.render(),
                      (f = null),
                      1)
                    : a >= 5
                    ? ($(".c-pong__button").addClass("c-pong__button--visible"),
                      p.render(),
                      (f = null),
                      1)
                    : void 0
            );
        };
        function F() {
            (this.x = 0), (this.y = 0);
        }
        function c() {
            (this.x = 0), (this.y = 0);
        }
        function w() {
            (this.x = 0), (this.y = 0);
        }
        function _() {
            (this.x = 0), (this.y = 0);
        }
        function m() {
            (this.x = 0), (this.y = 0);
        }
        function g(e, t, i, n) {
            (this.x = e),
                (this.y = t),
                (this.width = i),
                (this.height = n),
                (this.x_speed = 0),
                (this.y_speed = 0);
        }
        function v() {
            this.paddle = new g(175, 10, 50, 10);
        }
        function k() {
            this.paddle = new g(175, 580, 50, 10);
        }
        function T(e, t) {
            (this.x = e), (this.y = t), (this.x_speed = 0), (this.y_speed = 3);
        }
        (_.prototype.render = function () {
            (i.font = "60px sans-serif"),
                (i.fillStyle = "#FFFFFF"),
                (i.textAlign = "center"),
                i.fillText("Winner!", t.width / 2, t.height / 2 - 50);
        }),
            (m.prototype.render = function () {
                (i.font = "60px sans-serif"),
                    (i.fillStyle = "#FFFFFF"),
                    (i.textAlign = "center"),
                    i.fillText("Loser!", t.width / 2, t.height / 2 - 50);
            }),
            (w.prototype.render = function () {
                i.moveTo(10, 300),
                    i.lineTo(390, 300),
                    i.setLineDash([1, 2]),
                    (i.strokeStyle = "#FFFFFF"),
                    i.stroke();
            }),
            (F.prototype.render = function () {
                (i.font = "20px sans-serif"),
                    (i.fillStyle = "#FFFFFF"),
                    i.fillText(a, 10, 330);
            }),
            (c.prototype.render = function () {
                (i.font = "20px sans-serif"),
                    (i.fillStyle = "#FFFFFF"),
                    i.fillText(y, 10, 285);
            }),
            (F.prototype.update = function () {
                a++, i.fillText(a, 10, 330);
            }),
            (c.prototype.update = function () {
                y++, i.fillText(y, 10, 285);
            }),
            (g.prototype.render = function () {
                (i.fillStyle = "#FFFFFF"),
                    i.fillRect(this.x, this.y, this.width, this.height);
            }),
            (g.prototype.move = function (e, t) {
                (this.x += e),
                    (this.y += t),
                    (this.x_speed = e),
                    (this.y_speed = t),
                    this.x < 0
                        ? ((this.x = 0), (this.x_speed = 0))
                        : this.x + this.width > 400 &&
                          ((this.x = 400 - this.width), (this.x_speed = 0));
            }),
            (v.prototype.render = function () {
                this.paddle.render();
            }),
            (v.prototype.update = function (e) {
                var t = e.x,
                    i = -(this.paddle.x + this.paddle.width / 2 - t);
                i < 0 && i < -4 ? (i = -5) : i > 0 && i > 4 && (i = 5),
                    this.paddle.move(i, 0),
                    this.paddle.x < 0
                        ? (this.paddle.x = 0)
                        : this.paddle.x + this.paddle.width > 400 &&
                          (this.paddle.x = 400 - this.paddle.width);
            }),
            (k.prototype.render = function () {
                this.paddle.render();
            }),
            (k.prototype.update = function () {
                for (var e in u) {
                    var t = Number(e);
                    37 == t
                        ? this.paddle.move(-4, 0)
                        : 39 == t
                        ? this.paddle.move(4, 0)
                        : this.paddle.move(0, 0);
                }
            }),
            (T.prototype.render = function () {
                i.beginPath(),
                    i.fillRect(this.x, this.y, 6, 2 * Math.PI, !1),
                    (i.fillStyle = "#FFFFFF"),
                    i.fill();
            }),
            (T.prototype.update = function (e, t) {
                (this.x += this.x_speed), (this.y += this.y_speed);
                var i = this.x - 5,
                    n = this.y - 5,
                    s = this.x + 5,
                    d = this.y + 5;
                this.x - 5 < 0
                    ? ((this.x = 5), (this.x_speed = -this.x_speed))
                    : this.x + 5 > 400 &&
                      ((this.x = 395), (this.x_speed = -this.x_speed)),
                    (this.y < 0 || this.y > 600) &&
                        ((this.x_speed = 0),
                        (this.y_speed = 3),
                        (this.x = 200),
                        (this.y = 300)),
                    this.y <= 0 && o.update(),
                    this.y >= 600 && h.update(),
                    n > 300
                        ? n < e.y + e.height &&
                          d > e.y &&
                          i < e.x + e.width &&
                          s > e.x &&
                          ((this.y_speed = -3),
                          (this.x_speed += e.x_speed / 2),
                          (this.y += this.y_speed))
                        : n < t.y + t.height &&
                          d > t.y &&
                          i < t.x + t.width &&
                          s > t.x &&
                          ((this.y_speed = 3),
                          (this.x_speed += t.x_speed / 2),
                          (this.y += this.y_speed));
            }),
            document.body.appendChild(t),
            e(x),
            window.addEventListener("keydown", function (e) {
                u[e.keyCode] = !0;
            }),
            window.addEventListener("keyup", function (e) {
                delete u[e.keyCode];
            });
    },
    pongGameDark = () => {
        var e =
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                function (e) {
                    window.setTimeout(e, 1e3 / 60);
                },
            t = document.createElement("canvas");
        t.setAttribute("id", "js-game-dark");
        (t.width = 400), (t.height = 600);
        var i = t.getContext("2d"),
            n = new k(),
            s = new v(),
            d = new T(200, 300),
            o = new F(),
            h = new c(),
            r = new w(),
            p = new _(),
            l = new m();
        let a = 0,
            y = 0;
        var u = {};
        $(".js-replay").click(function (t) {
            t.preventDefault(),
                (a = 0),
                (y = 0),
                $(".c-pong__button").removeClass("c-pong__button--visible"),
                (f = function () {
                    (i.fillStyle = "#0F1D19"),
                        i.fillRect(0, 0, 400, 600),
                        n.render(),
                        s.render(),
                        d.render(),
                        o.render(),
                        h.render(),
                        (w.prototype.render = function () {
                            i.moveTo(10, 300),
                                i.lineTo(390, 300),
                                (i.strokeStyle = "#FFFFFF"),
                                i.stroke();
                        }),
                        r.render();
                }),
                e(x);
        });
        let f = function () {
            (i.fillStyle = "#0F1D19"),
                i.fillRect(0, 0, 400, 600),
                n.render(),
                s.render(),
                d.render(),
                o.render(),
                h.render(),
                r.render();
        };
        var x = function () {
            return (
                n.update(),
                s.update(d),
                d.update(n.paddle, s.paddle),
                f(),
                e(x),
                y >= 5
                    ? ($(".c-pong__button").addClass("c-pong__button--visible"),
                      l.render(),
                      (w.prototype.render = function () {
                          i.moveTo(10, 300),
                              i.lineTo(390, 300),
                              (i.strokeStyle = "#0F1D19"),
                              i.stroke();
                      }),
                      r.render(),
                      (f = null),
                      1)
                    : a >= 5
                    ? ($(".c-pong__button").addClass("c-pong__button--visible"),
                      p.render(),
                      (f = null),
                      1)
                    : void 0
            );
        };
        function F() {
            (this.x = 0), (this.y = 0);
        }
        function c() {
            (this.x = 0), (this.y = 0);
        }
        function w() {
            (this.x = 0), (this.y = 0);
        }
        function _() {
            (this.x = 0), (this.y = 0);
        }
        function m() {
            (this.x = 0), (this.y = 0);
        }
        function g(e, t, i, n) {
            (this.x = e),
                (this.y = t),
                (this.width = i),
                (this.height = n),
                (this.x_speed = 0),
                (this.y_speed = 0);
        }
        function v() {
            this.paddle = new g(175, 10, 50, 10);
        }
        function k() {
            this.paddle = new g(175, 580, 50, 10);
        }
        function T(e, t) {
            (this.x = e), (this.y = t), (this.x_speed = 0), (this.y_speed = 3);
        }
        (_.prototype.render = function () {
            (i.font = "60px sans-serif"),
                (i.fillStyle = "#FFFFFF"),
                (i.textAlign = "center"),
                i.fillText("Winner!", t.width / 2, t.height / 2 - 50);
        }),
            (m.prototype.render = function () {
                (i.font = "60px sans-serif"),
                    (i.fillStyle = "#FFFFFF"),
                    (i.textAlign = "center"),
                    i.fillText("Loser!", t.width / 2, t.height / 2 - 50);
            }),
            (w.prototype.render = function () {
                i.moveTo(10, 300),
                    i.lineTo(390, 300),
                    i.setLineDash([1, 2]),
                    (i.strokeStyle = "#FFFFFF"),
                    i.stroke();
            }),
            (F.prototype.render = function () {
                (i.font = "20px sans-serif"),
                    (i.fillStyle = "#FFFFFF"),
                    i.fillText(a, 10, 330);
            }),
            (c.prototype.render = function () {
                (i.font = "20px sans-serif"),
                    (i.fillStyle = "#FFFFFF"),
                    i.fillText(y, 10, 285);
            }),
            (F.prototype.update = function () {
                a++, i.fillText(a, 10, 330);
            }),
            (c.prototype.update = function () {
                y++, i.fillText(y, 10, 285);
            }),
            (g.prototype.render = function () {
                (i.fillStyle = "#FFFFFF"),
                    i.fillRect(this.x, this.y, this.width, this.height);
            }),
            (g.prototype.move = function (e, t) {
                (this.x += e),
                    (this.y += t),
                    (this.x_speed = e),
                    (this.y_speed = t),
                    this.x < 0
                        ? ((this.x = 0), (this.x_speed = 0))
                        : this.x + this.width > 400 &&
                          ((this.x = 400 - this.width), (this.x_speed = 0));
            }),
            (v.prototype.render = function () {
                this.paddle.render();
            }),
            (v.prototype.update = function (e) {
                var t = e.x,
                    i = -(this.paddle.x + this.paddle.width / 2 - t);
                i < 0 && i < -4 ? (i = -5) : i > 0 && i > 4 && (i = 5),
                    this.paddle.move(i, 0),
                    this.paddle.x < 0
                        ? (this.paddle.x = 0)
                        : this.paddle.x + this.paddle.width > 400 &&
                          (this.paddle.x = 400 - this.paddle.width);
            }),
            (k.prototype.render = function () {
                this.paddle.render();
            }),
            (k.prototype.update = function () {
                for (var e in u) {
                    var t = Number(e);
                    37 == t
                        ? this.paddle.move(-4, 0)
                        : 39 == t
                        ? this.paddle.move(4, 0)
                        : this.paddle.move(0, 0);
                }
            }),
            (T.prototype.render = function () {
                i.beginPath(),
                    i.fillRect(this.x, this.y, 6, 2 * Math.PI, !1),
                    (i.fillStyle = "#FFFFFF"),
                    i.fill();
            }),
            (T.prototype.update = function (e, t) {
                (this.x += this.x_speed), (this.y += this.y_speed);
                var i = this.x - 5,
                    n = this.y - 5,
                    s = this.x + 5,
                    d = this.y + 5;
                this.x - 5 < 0
                    ? (((this.x = 5), (this.x_speed = -this.x_speed)) && new Audio('/static/sounds/pong.mp3').play())
                    : this.x + 5 > 400 && new Audio('/static/sounds/pong.mp3').play() &&
                      ((this.x = 395), (this.x_speed = -this.x_speed)),
                    (this.y < 0 || this.y > 600) &&
                        ((this.x_speed = 0),
                        (this.y_speed = 3),
                        (this.x = 200),
                        (this.y = 300)),
                    this.y <= 0 && o.update(),
                    this.y >= 600 && h.update(),
                    n > 300
                        ? n < e.y + e.height &&
                          d > e.y &&
                          i < e.x + e.width &&
                          s > e.x &&
                          ((this.y_speed = -3),
                          (this.x_speed += e.x_speed / 2),
                          (this.y += this.y_speed)) && new Audio('/static/sounds/pong.mp3').play()
                        : n < t.y + t.height &&
                          d > t.y &&
                          i < t.x + t.width &&
                          s > t.x &&
                          ((this.y_speed = 3),
                          (this.x_speed += t.x_speed / 2),
                          (this.y += this.y_speed)) && new Audio('/static/sounds/pong.mp3').play();
            }),
            document.body.appendChild(t),
            e(x),
            window.addEventListener("keydown", function (e) {
                u[e.keyCode] = !0;
            }),
            window.addEventListener("keyup", function (e) {
                delete u[e.keyCode];
            });
    },
    renderGame = () => {
        $("#js-game").appendTo(".js-game-holder"),
            $("#js-game-dark").appendTo(".js-game-holder"),
            $("#js-game-dark").hide();
    };
$(document).ready(() => {
    pongGame(),
        pongGameDark(),
        $("#js-game").appendTo(".js-game-holder"),
        $("#js-game-dark").appendTo(".js-game-holder"),
        $("#js-game-dark").hide();
});
