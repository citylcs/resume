var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import ReactDOM from 'react-dom';
// import './sass/style.scss'


function TopBar() {
    return React.createElement(
        'div',
        { className: 'menu' },
        React.createElement(
            'ul',
            { className: 'menu_content' },
            React.createElement(
                'li',
                null,
                React.createElement(
                    'a',
                    { href: '#' },
                    'Me'
                )
            ),
            React.createElement(
                'li',
                null,
                'Resume'
            )
        )
    );
}

var OverviewTitle = function (_React$Component) {
    _inherits(OverviewTitle, _React$Component);

    function OverviewTitle() {
        _classCallCheck(this, OverviewTitle);

        return _possibleConstructorReturn(this, (OverviewTitle.__proto__ || Object.getPrototypeOf(OverviewTitle)).apply(this, arguments));
    }

    _createClass(OverviewTitle, [{
        key: 'render',
        value: function render() {
            var overTitle = this.props.items.map(function (item, index) {
                if (item.overTitle) {
                    return React.createElement(
                        'h2',
                        { className: 'bigTitle', key: index },
                        item.overTitle
                    );
                }
            });
            var download = this.props.items.map(function (item) {
                if (item.downloadName) {
                    return item.downloadName;
                }
            });
            return React.createElement(
                'div',
                { className: 'overview_top' },
                overTitle,
                React.createElement(
                    'a',
                    { href: 'https://github.com/citylcs/resume',
                        className: 'download_button' },
                    download
                )
            );
        }
    }]);

    return OverviewTitle;
}(React.Component);

var OverviewContent = function (_React$Component2) {
    _inherits(OverviewContent, _React$Component2);

    function OverviewContent() {
        _classCallCheck(this, OverviewContent);

        return _possibleConstructorReturn(this, (OverviewContent.__proto__ || Object.getPrototypeOf(OverviewContent)).apply(this, arguments));
    }

    _createClass(OverviewContent, [{
        key: 'render',
        value: function render() {
            var content = this.props.items.map(function (item, index) {
                if (item.overContent) {
                    return React.createElement(
                        'p',
                        { key: index, className: 'overview_content' },
                        item.overContent
                    );
                }
            });
            return React.createElement(
                'div',
                null,
                content
            );
        }
    }]);

    return OverviewContent;
}(React.Component);

var Overview = function (_React$Component3) {
    _inherits(Overview, _React$Component3);

    function Overview() {
        _classCallCheck(this, Overview);

        return _possibleConstructorReturn(this, (Overview.__proto__ || Object.getPrototypeOf(Overview)).apply(this, arguments));
    }

    _createClass(Overview, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'overview' },
                React.createElement(OverviewTitle, { items: this.props.items }),
                React.createElement(OverviewContent, { items: this.props.items })
            );
        }
    }]);

    return Overview;
}(React.Component);

var ExperienceTitle = function (_React$Component4) {
    _inherits(ExperienceTitle, _React$Component4);

    function ExperienceTitle() {
        _classCallCheck(this, ExperienceTitle);

        return _possibleConstructorReturn(this, (ExperienceTitle.__proto__ || Object.getPrototypeOf(ExperienceTitle)).apply(this, arguments));
    }

    _createClass(ExperienceTitle, [{
        key: 'render',
        value: function render() {
            var expTitle = this.props.exp.map(function (item) {
                if (item.ExpTitle) {
                    return item.ExpTitle;
                }
            });
            return React.createElement(
                'h2',
                null,
                expTitle
            );
        }
    }]);

    return ExperienceTitle;
}(React.Component);

var Company = function (_React$Component5) {
    _inherits(Company, _React$Component5);

    function Company() {
        _classCallCheck(this, Company);

        return _possibleConstructorReturn(this, (Company.__proto__ || Object.getPrototypeOf(Company)).apply(this, arguments));
    }

    _createClass(Company, [{
        key: 'render',
        value: function render() {
            var company = this.props.exp.map(function (item) {
                if (item.ExpCompanyName) {
                    return item.ExpCompanyName;
                }
            });
            return React.createElement(
                'h3',
                null,
                company
            );
        }
    }]);

    return Company;
}(React.Component);

function Target() {
    return React.createElement(
        'div',
        { className: 'target_border' },
        React.createElement(
            'div',
            { className: 'target_dote' },
            ' '
        )
    );
}

var Description = function (_React$Component6) {
    _inherits(Description, _React$Component6);

    function Description() {
        _classCallCheck(this, Description);

        return _possibleConstructorReturn(this, (Description.__proto__ || Object.getPrototypeOf(Description)).apply(this, arguments));
    }

    _createClass(Description, [{
        key: 'render',
        value: function render() {
            var des = this.props.exp.map(function (item, index) {
                if (item.description) {
                    return React.createElement(
                        'p',
                        { key: index },
                        item.description
                    );
                }
            });
            return React.createElement(
                'div',
                null,
                des
            );
        }
    }]);

    return Description;
}(React.Component);

var ExpList = function (_React$Component7) {
    _inherits(ExpList, _React$Component7);

    function ExpList() {
        _classCallCheck(this, ExpList);

        return _possibleConstructorReturn(this, (ExpList.__proto__ || Object.getPrototypeOf(ExpList)).apply(this, arguments));
    }

    _createClass(ExpList, [{
        key: 'render',
        value: function render() {
            var list = this.props.exp.map(function (item, index) {
                if (item.expList) {
                    return React.createElement(
                        'li',
                        { key: index },
                        item.expList
                    );
                }
            });
            return React.createElement(
                'ul',
                null,
                list
            );
        }
    }]);

    return ExpList;
}(React.Component);

var Experience = function (_React$Component8) {
    _inherits(Experience, _React$Component8);

    function Experience() {
        _classCallCheck(this, Experience);

        return _possibleConstructorReturn(this, (Experience.__proto__ || Object.getPrototypeOf(Experience)).apply(this, arguments));
    }

    _createClass(Experience, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(ExperienceTitle, { exp: this.props.exp }),
                React.createElement(Target, null),
                React.createElement(Company, { exp: this.props.exp }),
                React.createElement(Description, { exp: this.props.exp }),
                React.createElement(ExpList, { exp: this.props.exp })
            );
        }
    }]);

    return Experience;
}(React.Component);

var SkillsTitle = function (_React$Component9) {
    _inherits(SkillsTitle, _React$Component9);

    function SkillsTitle() {
        _classCallCheck(this, SkillsTitle);

        return _possibleConstructorReturn(this, (SkillsTitle.__proto__ || Object.getPrototypeOf(SkillsTitle)).apply(this, arguments));
    }

    _createClass(SkillsTitle, [{
        key: 'render',
        value: function render() {
            var htmlTitle = this.props.html.map(function (item) {
                if (item.htmlTitle) {
                    return item.htmlTitle;
                }
            });
            return React.createElement(
                'h2',
                { className: 'title' },
                htmlTitle
            );
        }
    }]);

    return SkillsTitle;
}(React.Component);

var HTMLName = function (_React$Component10) {
    _inherits(HTMLName, _React$Component10);

    function HTMLName() {
        _classCallCheck(this, HTMLName);

        return _possibleConstructorReturn(this, (HTMLName.__proto__ || Object.getPrototypeOf(HTMLName)).apply(this, arguments));
    }

    _createClass(HTMLName, [{
        key: 'render',
        value: function render() {
            var htmlName = this.props.html.map(function (item) {
                if (item.htmlName) {
                    return item.htmlName;
                }
            });
            return React.createElement(
                'h3',
                { className: 'middleTitle' },
                htmlName
            );
        }
    }]);

    return HTMLName;
}(React.Component);

var HTMLDes = function (_React$Component11) {
    _inherits(HTMLDes, _React$Component11);

    function HTMLDes() {
        _classCallCheck(this, HTMLDes);

        return _possibleConstructorReturn(this, (HTMLDes.__proto__ || Object.getPrototypeOf(HTMLDes)).apply(this, arguments));
    }

    _createClass(HTMLDes, [{
        key: 'render',
        value: function render() {
            var des = this.props.html.map(function (item, index) {
                if (item.description) {
                    return React.createElement(
                        'p',
                        { className: 'second_ul', key: index },
                        item.description
                    );
                }
            });
            return React.createElement(
                'div',
                null,
                des
            );
        }
    }]);

    return HTMLDes;
}(React.Component);

var HTMLList = function (_React$Component12) {
    _inherits(HTMLList, _React$Component12);

    function HTMLList() {
        _classCallCheck(this, HTMLList);

        return _possibleConstructorReturn(this, (HTMLList.__proto__ || Object.getPrototypeOf(HTMLList)).apply(this, arguments));
    }

    _createClass(HTMLList, [{
        key: 'render',
        value: function render() {
            var list = this.props.html.map(function (item, index) {
                if (item.htmlList) {
                    return React.createElement(
                        'li',
                        { key: index },
                        item.htmlList
                    );
                }
            });
            return React.createElement(
                'ul',
                { className: 'second_ul' },
                list
            );
        }
    }]);

    return HTMLList;
}(React.Component);

var HTML = function (_React$Component13) {
    _inherits(HTML, _React$Component13);

    function HTML() {
        _classCallCheck(this, HTML);

        return _possibleConstructorReturn(this, (HTML.__proto__ || Object.getPrototypeOf(HTML)).apply(this, arguments));
    }

    _createClass(HTML, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(SkillsTitle, { html: this.props.html }),
                React.createElement(
                    'div',
                    { className: 'target_border2' },
                    React.createElement(
                        'div',
                        { className: 'target_dote2' },
                        ' '
                    )
                ),
                React.createElement(HTMLName, { html: this.props.html }),
                React.createElement(HTMLDes, { html: this.props.html }),
                React.createElement(HTMLList, { html: this.props.html })
            );
        }
    }]);

    return HTML;
}(React.Component);

var CssName = function (_React$Component14) {
    _inherits(CssName, _React$Component14);

    function CssName() {
        _classCallCheck(this, CssName);

        return _possibleConstructorReturn(this, (CssName.__proto__ || Object.getPrototypeOf(CssName)).apply(this, arguments));
    }

    _createClass(CssName, [{
        key: 'render',
        value: function render() {
            var cssName = this.props.css.map(function (item) {
                if (item.name) {
                    return item.name;
                }
            });
            return React.createElement(
                'h3',
                { className: 'middleTitle' },
                cssName
            );
        }
    }]);

    return CssName;
}(React.Component);

var CssDes = function (_React$Component15) {
    _inherits(CssDes, _React$Component15);

    function CssDes() {
        _classCallCheck(this, CssDes);

        return _possibleConstructorReturn(this, (CssDes.__proto__ || Object.getPrototypeOf(CssDes)).apply(this, arguments));
    }

    _createClass(CssDes, [{
        key: 'render',
        value: function render() {
            var des = this.props.css.map(function (item, index) {
                if (item.description) {
                    return React.createElement(
                        'p',
                        { className: 'second_ul', key: index },
                        item.description
                    );
                }
            });
            return React.createElement(
                'div',
                null,
                des
            );
        }
    }]);

    return CssDes;
}(React.Component);

var CssList = function (_React$Component16) {
    _inherits(CssList, _React$Component16);

    function CssList() {
        _classCallCheck(this, CssList);

        return _possibleConstructorReturn(this, (CssList.__proto__ || Object.getPrototypeOf(CssList)).apply(this, arguments));
    }

    _createClass(CssList, [{
        key: 'render',
        value: function render() {
            var list = this.props.css.map(function (item, index) {
                if (item.list) {
                    return React.createElement(
                        'li',
                        { key: index },
                        item.list
                    );
                }
            });
            return React.createElement(
                'ul',
                { className: 'second_ul' },
                list
            );
        }
    }]);

    return CssList;
}(React.Component);

var Css = function (_React$Component17) {
    _inherits(Css, _React$Component17);

    function Css() {
        _classCallCheck(this, Css);

        return _possibleConstructorReturn(this, (Css.__proto__ || Object.getPrototypeOf(Css)).apply(this, arguments));
    }

    _createClass(Css, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: 'target_border2' },
                    React.createElement(
                        'div',
                        { className: 'target_dote2' },
                        ' '
                    )
                ),
                React.createElement(CssName, { css: this.props.css }),
                React.createElement(CssDes, { css: this.props.css }),
                React.createElement(CssList, { css: this.props.css })
            );
        }
    }]);

    return Css;
}(React.Component);

var JsName = function (_React$Component18) {
    _inherits(JsName, _React$Component18);

    function JsName() {
        _classCallCheck(this, JsName);

        return _possibleConstructorReturn(this, (JsName.__proto__ || Object.getPrototypeOf(JsName)).apply(this, arguments));
    }

    _createClass(JsName, [{
        key: 'render',
        value: function render() {
            var jsName = this.props.js.map(function (item) {
                if (item.name) {
                    return item.name;
                }
            });
            return React.createElement(
                'h3',
                { className: 'middleTitle' },
                jsName
            );
        }
    }]);

    return JsName;
}(React.Component);

var JsDes = function (_React$Component19) {
    _inherits(JsDes, _React$Component19);

    function JsDes() {
        _classCallCheck(this, JsDes);

        return _possibleConstructorReturn(this, (JsDes.__proto__ || Object.getPrototypeOf(JsDes)).apply(this, arguments));
    }

    _createClass(JsDes, [{
        key: 'render',
        value: function render() {
            var des = this.props.js.map(function (item, index) {
                if (item.description) {
                    return React.createElement(
                        'p',
                        { className: 'second_ul', key: index },
                        item.description
                    );
                }
            });
            return React.createElement(
                'div',
                null,
                des
            );
        }
    }]);

    return JsDes;
}(React.Component);

var JsList = function (_React$Component20) {
    _inherits(JsList, _React$Component20);

    function JsList() {
        _classCallCheck(this, JsList);

        return _possibleConstructorReturn(this, (JsList.__proto__ || Object.getPrototypeOf(JsList)).apply(this, arguments));
    }

    _createClass(JsList, [{
        key: 'render',
        value: function render() {
            var list = this.props.js.map(function (item, index) {
                if (item.list) {
                    return React.createElement(
                        'li',
                        { key: index },
                        item.list
                    );
                }
            });
            return React.createElement(
                'ul',
                { className: 'second_ul' },
                list
            );
        }
    }]);

    return JsList;
}(React.Component);

var Js = function (_React$Component21) {
    _inherits(Js, _React$Component21);

    function Js() {
        _classCallCheck(this, Js);

        return _possibleConstructorReturn(this, (Js.__proto__ || Object.getPrototypeOf(Js)).apply(this, arguments));
    }

    _createClass(Js, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: 'target_border2' },
                    React.createElement(
                        'div',
                        { className: 'target_dote2' },
                        ' '
                    )
                ),
                React.createElement(JsName, { js: this.props.js }),
                React.createElement(JsDes, { js: this.props.js }),
                React.createElement(JsList, { js: this.props.js })
            );
        }
    }]);

    return Js;
}(React.Component);

var ProjectTitle = function (_React$Component22) {
    _inherits(ProjectTitle, _React$Component22);

    function ProjectTitle() {
        _classCallCheck(this, ProjectTitle);

        return _possibleConstructorReturn(this, (ProjectTitle.__proto__ || Object.getPrototypeOf(ProjectTitle)).apply(this, arguments));
    }

    _createClass(ProjectTitle, [{
        key: 'render',
        value: function render() {
            var title = this.props.project.map(function (item) {
                if (item.title) {
                    return item.title;
                }
            });
            return React.createElement(
                'h2',
                { className: 'last_title' },
                title
            );
        }
    }]);

    return ProjectTitle;
}(React.Component);

var ProjectList = function (_React$Component23) {
    _inherits(ProjectList, _React$Component23);

    function ProjectList() {
        _classCallCheck(this, ProjectList);

        return _possibleConstructorReturn(this, (ProjectList.__proto__ || Object.getPrototypeOf(ProjectList)).apply(this, arguments));
    }

    _createClass(ProjectList, [{
        key: 'render',
        value: function render() {
            var rows = [];
            this.props.project.forEach(function (item, index) {
                if (item.list) {
                    rows.push(React.createElement(
                        'li',
                        { className: 'pro', key: index },
                        React.createElement(
                            'a',
                            { href: item.url },
                            item.list
                        ),
                        React.createElement(
                            'p',
                            { className: 'pro_des', key: index },
                            item.description
                        ),
                        React.createElement(
                            'div',
                            { className: 'li_type' },
                            React.createElement(
                                'div',
                                { className: 'dot', style: { backgroundColor: item.light } },
                                ' '
                            ),
                            React.createElement(
                                'p',
                                { key: index },
                                item.type
                            )
                        )
                    ));
                }
            });
            return React.createElement(
                'ul',
                { className: 'third_ul' },
                rows
            );
        }
    }]);

    return ProjectList;
}(React.Component);

var Project = function (_React$Component24) {
    _inherits(Project, _React$Component24);

    function Project() {
        _classCallCheck(this, Project);

        return _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).apply(this, arguments));
    }

    _createClass(Project, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(ProjectTitle, { project: this.props.project }),
                React.createElement(
                    'div',
                    { className: 'target_border3' },
                    React.createElement(
                        'div',
                        { className: 'target_dote3' },
                        ' '
                    )
                ),
                React.createElement(ProjectList, { project: this.props.project })
            );
        }
    }]);

    return Project;
}(React.Component);

var ITEMS = [{ overTitle: 'Overview' }, { downloadHref: 'https://github.com/citylcs/resume' }, { downloadName: 'Download resume' }, { overContent: '早已不是web前端 ≈ Word document的时代，我被其吸引，同时抱着对后端的兴趣选择前端。爱捣鼓技术、喜欢新鲜事物，接触新鲜事物会保持激动兴奋状态。有着能为了搭建shadowsocks花掉一整天的时间对技术的热爱，更有为服务端的性能提升废寝忘食的执着。有着独立思考以及解决问题的能力，更有遇到问题不急躁的耐心。这就是我，这样的我喜爱着前端。' }];
var EXP = [{ ExpTitle: 'Experience' }, { ExpCompanyName: '北京拓思德科技有限公司 (电子教育笔)' }, { description: '坐标测量员(实习)' }, { description: 'Jul 2014 - Sep 2014' }, { expList: '负责该公司研发的一款电子教育笔以及与苹果公司合作的Apple Pencil的坐标测量，精确定位图像出现在区域内相应位置' }, { expList: '负责该公司产品的包装和市场宣传' }];

var HTML1 = [{ htmlTitle: 'Skills' }, { htmlName: 'HTML' }, { description: 'HTML5' }, { htmlList: '熟悉HTML标签的基本属性和使用方法' }, { htmlList: '熟悉W3C标准，能按要求写出简洁无误的代码' }, { htmlList: '了解HTML5 video、canvas等新标签的属性以及使用方法' }];

var CSS = [{ name: 'CSS' }, { description: 'CSS3' }, { description: 'transform' }, { description: 'animate' }, { description: 'bootstrap' }, { list: '熟练使用css，擅长div + css的布局，能够写出兼容常见浏览器的代码' }, { list: '熟悉盒模型，以及各类布局的使用方法' }, { list: '熟悉css3新增属性的使用，border-radius、transform、animation等' }, { list: '熟练使用响应式布局适配各设备的屏幕尺寸' }, { list: '熟练使用SASS预处理器' }, { list: '熟悉bootstrap、animation.css等css框架的使用' }];

var JS = [{ name: 'JavaScript' }, { description: 'jQuery' }, { description: 'React' }, { description: 'ES6' }, { description: 'DOM' }, { list: 'JavaScript基础牢固，熟悉DOM、event、ajax，能够编写出基本的JavaScript原生代码' }, { list: '熟悉ES6语法，个人项目中已全面使用ES6进行开发' }, { list: '熟悉jQuery api，能够编写出最基本的动态交互效果，并擅长用其封装日常的开发组件' }, { list: '熟悉React、underscore等框架，对前端组件化有深入了解' }, { list: '熟练使用Git版本控制工具' }, { list: '熟练使用Gulp、webpack等前端自动化构建工具' }, { list: '熟练使用chrome developer tools调试工具来调试代码' }, { list: '熟练使用intellij idea、Sublime Text3等编辑器进行前端页面手工式的开发' }, { list: '熟练使用Google、Stack Overflow等网站解决问题' }];

var PROJECT = [{ title: 'Project' }, { list: 'Victor-series-page', description: '网络加速服务类主页', type: 'HTML', light: '#e34c26', url: 'https://github.com/citylcs/Victor-series-page' }, { list: 'toDoList', description: '原生JavaScript开发的todolist应用', type: 'JavaScript', light: '#f1e054', url: 'https://github.com/citylcs/toDoList' }, { list: 'Calculation', description: '一个简单的、原生JavaScript制作的计算器', type: 'CSS', light: '#563d7c', url: 'https://github.com/citylcs/Calculation' }, { list: 'React-TODO', description: 'React.js框架下开发的带过滤功能的todolist应用', type: 'JavaScript', light: '#f1e054', url: 'https://github.com/citylcs/React-TODO' }];

function Resume() {
    return React.createElement(
        'div',
        null,
        React.createElement(TopBar, null),
        React.createElement(
            'div',
            { id: 'midContent' },
            React.createElement(Overview, { items: ITEMS }),
            React.createElement(Experience, { exp: EXP }),
            React.createElement(HTML, { html: HTML1 }),
            React.createElement(Css, { css: CSS }),
            React.createElement(Js, { js: JS }),
            React.createElement(Project, { project: PROJECT })
        )
    );
}

ReactDOM.render(React.createElement(Resume, null), document.getElementById('app'));