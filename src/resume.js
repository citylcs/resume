import React from 'react'
import ReactDOM from 'react-dom'
import QueueAnim from 'rc-queue-anim'

class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isHidden: false,
        }
    }

    handleClick() {
        this.setState(prevState => ({
            isHidden: !prevState.isHidden,
        }));
    }

    render() {
        return (
            <div className={this.state.isHidden ?
                'menu show' : 'menu'}>
                {
                    this.state.isHidden ?
                        <ul className="menu_content open">
                            <li><a href="index.html">Me</a></li>
                            <li>Resume</li>
                        </ul> :
                        <ul className="menu_content">
                            <li><a href="index.html">Me</a></li>
                            <li>Resume</li>
                        </ul>
                }
                <div onClick={this.handleClick}>
                    <i className={this.state.isHidden ? 'icon-chevron-down down' : 'icon-chevron-down'} />
                </div>
            </div>
        )
    }
}

class OverviewTitle extends React.Component {
    render() {
        let overTitle = this.props.items.map((item, index) => {
            if (item.overTitle) {
                return <h2 className="bigTitle" key={index}>{item.overTitle}</h2>;
            }
        });
        let download = this.props.items.map((item) => {
            if (item.downloadName) {
                return item.downloadName;
            }
        });
        return (
            <div className="overview_top">
                {overTitle}
                <a download href="pdf/kelvin.pdf"
                        className="download_button" >
                    {download}
                </a>
            </div>
        )
    }
}

class OverviewContent extends React.Component {
    render() {
        let content = this.props.items.map((item, index) => {
            if (item.overContent) {
                return <p key={index} className="overview_content">{item.overContent}</p>;
            }
        });
        return <div>{content}</div>
    }
}

class Overview extends React.Component {
    render() {
        return (
            <div className="overview">
                <OverviewTitle items={this.props.items} />
                <OverviewContent items={this.props.items} />
            </div>
        )
    }
}

class ExperienceTitle extends React.Component {
    render() {
        let expTitle = this.props.exp.map((item) => {
            if (item.ExpTitle) {
                return item.ExpTitle;
            }
        });
        return <h2>{expTitle}</h2>
    }
}

class Company extends React.Component {
    render() {
        let company = this.props.exp.map((item) => {
            if (item.ExpCompanyName) {
                return item.ExpCompanyName;
            }
        });
        return <h3>{company}</h3>
    }
}

function Target() {
    return(
        <div className="target_border">
            <div className="target_dote"> </div>
        </div>
    )
}

class Description extends React.Component {
    render() {
        let des = this.props.exp.map((item, index) => {
            if (item.description) {
                return <p key={index}>{item.description}</p>
            }
        });
        return <div>{des}</div>
    }
}

class ExpList extends React.Component {
    render() {
        let list = this.props.exp.map((item, index) => {
            if (item.expList) {
                return <li key={index}>{item.expList}</li>
            }
        });
        return (
            <ul>{list}</ul>
        )
    }
}

class Experience extends React.Component {
    render() {
        return (
            <div>
                <ExperienceTitle exp={this.props.exp} />
                <Target />
                <Company exp={this.props.exp}/>
                <Description exp={this.props.exp}/>
                <ExpList exp={this.props.exp}/>
            </div>
        )
    }
}

class SkillOverview extends React.Component {
    render() {
        let skillOver = this.props.skillOver.map((item, index) => {
            if (item.name) {
                return <span key={index}>{item.name}</span>
            }
        });
        let skillOverName = this.props.skillOver.map((item, index) => {
            if (item.title) {
                return <h2 id="skillOverTitle" key={index}>{item.title}</h2>
            }
        });
        return (
            <div id="skillOver">
                {skillOverName}
                <div id="overWrap">
                    {skillOver}
                </div>
            </div>
        )
    }
}

class SkillsTitle extends React.Component {
    render() {
        let htmlTitle = this.props.html.map((item) => {
            if (item.htmlTitle) {
                return item.htmlTitle;
            }
        });
        return (
            <h2 className="title">{htmlTitle}</h2>
        )
    }
}

class HTMLName extends React.Component {
    render() {
        let htmlName = this.props.html.map((item) => {
            if (item.htmlName) {
                return item.htmlName;
            }
        });
        return (
            <h3 className="middleTitle">{htmlName}</h3>
        )
    }
}

class HTMLDes extends React.Component {
    render() {
        let des = this.props.html.map((item, index) => {
            if (item.description) {
                return <p className="second_ul" key={index}>{item.description}</p>
            }
        });
        return (
            <div>{des}</div>
        )
    }
}

class HTMLList extends React.Component {
    render() {
        let list = this.props.html.map((item, index) => {
            if (item.htmlList) {
                return <li key={index}>{item.htmlList}</li>
            }
        });
        return (
            <ul className="second_ul">{list}</ul>
        )
    }
}

class HTML extends React.Component {
    render() {
        return (
            <div>
                <SkillsTitle html={this.props.html} />
                <div className="target_border2">
                    <div className="target_dote2"> </div>
                </div>
                <HTMLName html={this.props.html} />
                <HTMLDes html={this.props.html} />
                <HTMLList html={this.props.html} />
            </div>
        )
    }
}

class CssName extends React.Component {
    render() {
        let cssName = this.props.css.map((item) => {
            if (item.name) {
                return item.name;
            }
        });
        return <h3 className="middleTitle">{cssName}</h3>
    }
}

class CssDes extends React.Component {
    render() {
        let des = this.props.css.map((item, index) => {
            if (item.description) {
                return <p className="second_ul" key={index}>{item.description}</p>
            }
        });
        return (
            <div>{des}</div>
        )
    }
}

class CssList extends React.Component {
    render() {
        let list = this.props.css.map((item, index) => {
            if (item.list) {
                return <li key={index}>{item.list}</li>
            }
        });
        return (
            <ul className="second_ul">{list}</ul>
        )
    }
}

class Css extends React.Component {
    render() {
        return (
            <div>
                <div className="target_border2">
                    <div className="target_dote2"> </div>
                </div>
                <CssName css={this.props.css} />
                <CssDes css={this.props.css} />
                <CssList css={this.props.css} />
            </div>
        )
    }
}

class JsName extends React.Component {
    render() {
        let jsName = this.props.js.map((item) => {
            if (item.name) {
                return item.name;
            }
        });
        return <h3 className="middleTitle">{jsName}</h3>
    }
}

class JsDes extends React.Component {
    render() {
        let des = this.props.js.map((item, index) => {
            if (item.description) {
                return <p className="second_ul" key={index}>{item.description}</p>
            }
        });
        return (
            <div>{des}</div>
        )
    }
}

class JsList extends React.Component {
    render() {
        let list = this.props.js.map((item, index) => {
            if (item.list) {
                return <li key={index}>{item.list}</li>
            }
        });
        return (
            <ul className="second_ul">{list}</ul>
        )
    }
}

class Js extends React.Component {
    render() {
        return (
            <div>
                <div className="target_border2">
                    <div className="target_dote2"> </div>
                </div>
                <JsName js={this.props.js} />
                <JsDes js={this.props.js} />
                <JsList js={this.props.js} />
            </div>
        )
    }
}

class Frameworks extends React.Component {
    render() {
        let description = this.props.frameworks.map((item, index) => {
            if (item.description) {
                return <li key={index}>{item.description}</li>
            }
        });
        let title = this.props.frameworks.map((item, index) => {
            if (item.title) {
                return <h2 className="frameworks" key={index}>{item.title}</h2>
            }
        });
        return(
            <div id="frameworks">
                {title}
                <div className="target_border3">
                    <div className="target_dote3"> </div>
                </div>
                <ul className="frameworksDes">
                    {description}
                </ul>
            </div>
        )
    }
}

class LearningExperience extends React.Component {
    render() {
        let title = this.props.learningExperience.map((item, index) => {
            if (item.title) {
                return <h2 id="learningTitle" key={index}>{item.title}</h2>
            }
        });
        let learningTime1 = this.props.learningExperience.map((item, index) => {
            if (item.time1) {
                return <p id="time1" key={index}>{item.time1}</p>
            }
        });
        let learningDes1 = this.props.learningExperience.map((item, index) => {
            if (item.description1) {
                return <li key={index}>{item.description1}</li>
            }
        });
        let learningTime2 = this.props.learningExperience.map((item, index) => {
            if (item.time2) {
                return <p id="time2" key={index}>{item.time2}</p>
            }
        });
        let learningDes2 = this.props.learningExperience.map((item, index) => {
            if (item.description2) {
                return <li key={index}>{item.description2}</li>
            }
        });
        let rows = [];
        this.props.learningExperience.forEach((item, index) => {
            if (item.homework) {
                return (
                    rows.push(
                        <li id="hm_name" key={index}>
                            <p id="des">网易云课堂作业</p>
                            <div id="hm_wrap">
                                <a id="hm_url" href={item.url}>{item.homework}</a>
                                <p id="hm_des" key={index}>{item.description}</p>
                                <div id="hm_type">
                                    <div id="hm_dot" style={{backgroundColor: item.light}} />
                                    <p id="hm_last" key={index}>{item.type}</p>
                                </div>
                            </div>
                        </li>
                    )
                )
            }
        });
        return (
            <div id="learningExperience">
                {title}
                <div className="target_border4">
                    <div className="target_dote4"> </div>
                </div>
                <ul className="leaningExperience">
                    <li className="mooc">
                        {learningTime1}
                        <ul className="learningDes1">{learningDes1}</ul>
                    </li>
                    <li className="netEasy">
                        {learningTime2}
                        <ul className="learningDes2">{learningDes2}</ul>
                    </li>
                    {rows}
                </ul>
            </div>
        )
    }
}

class ProjectTitle extends React.Component {
    render() {
        let title = this.props.project.map((item) => {
            if (item.title) {
                return item.title;
            }
        });
        return <h2 className="last_title">{title}</h2>
    }
}

class ProjectList extends React.Component {
    render() {
        let rows = [];
        this.props.project.forEach((item, index) => {
            if (item.list) {
                rows.push(
                    <li className="pro" key={index}>
                        <a href={item.url}>{item.list}</a>
                        <p className="pro_des" key={index}>{item.description}</p>
                        <div className="li_type">
                            <div className="dot" style={{backgroundColor: item.light}}> </div>
                            <p key={index}>{item.type}</p>
                        </div>
                    </li>
                )
            }
        });
        return <ul className="third_ul">{rows}</ul>
    }
}

class Project extends React.Component {
    render() {
        return (
            <div>
                <ProjectTitle project={this.props.project} />
                <div className="target_border5">
                    <div className="target_dote5"> </div>
                </div>
                <ProjectList project={this.props.project} />
            </div>
        )
    }
}

const ITEMS = [
    {overTitle: 'Overview'},
    {downloadHref: 'https://github.com/citylcs/resume'},
    {downloadName: 'Download resume'},
    {overContent: '早已不是web前端 ≈ Word document的时代，我被其吸引，同时抱着对后端的兴趣选择前端。爱捣鼓技术、喜欢新鲜事物，接触新鲜事物会保持激动兴奋状态。有着能为了搭建shadowsocks花掉一整天的时间对技术的热爱，更有为服务端的性能提升废寝忘食的执着。有着独立思考以及解决问题的能力，更有遇到问题不急躁的耐心。这就是我，这样的我喜爱着前端。'},
];
const EXP = [
    {ExpTitle: 'Experience'},
    {ExpCompanyName: '北京拓思德科技有限公司'},
    {description: '坐标测量员(软件测试)'},
    {description: 'Jul 2014 - Sep 2014'},
    {expList: '负责该公司研发的一款电子教育笔以及与苹果公司合作的Apple Pencil的坐标测量，精确定位图像出现在区域内相应位置'},
    {expList: '负责该公司产品的包装和市场宣传'},
];

const SKILLOVER = [
    {title: 'Skills Overview'},
    {name: 'HTML(5)'},
    {name: 'CSS(3)'},
    {name: 'JavaScript'},
    {name: 'DOM'},
    {name: 'W3C标准'},
    {name: 'ES6'},
    {name: '语义化'},
    {name: '响应式布局'},
    {name: 'Git'},
    {name: 'Ajax'},
    {name: 'JQuery'},
    {name: 'React'},
    {name: 'bootstrap'},
    {name: 'SASS'},
    {name: 'Gulp'},
    {name: 'Webpack'},
];

const HTML1 = [
    {htmlTitle: 'Skills'},
    {htmlName: 'HTML'},
    {description: 'HTML5'},
    {htmlList: '熟悉HTML标签的基本属性和使用方法'},
    {htmlList: '熟悉W3C标准，能按要求写出简洁无误的代码'},
    {htmlList: '了解HTML5 video、canvas等新标签的属性以及使用方法'},
];

const CSS = [
    {name: 'CSS'},
    {description: 'CSS3'},
    {description: 'transform'},
    {list: '熟练使用css，擅长div + css的布局，能够写出兼容常见浏览器的代码'},
    {list: '熟悉盒模型，以及各类布局的使用方法'},
    {list: '熟悉css3新增属性的使用，border-radius、transform、animation等'},
    {list: '熟练使用响应式布局适配各设备的屏幕尺寸'},
    {list: '熟练使用SASS预处理器'},
];

const JS = [
    {name: 'JavaScript'},
    {description: 'ES6'},
    {description: 'DOM'},
    {list: 'JavaScript基础牢固，熟悉DOM、event、ajax，能够编写出基本的JavaScript原生代码'},
    {list: '熟悉ES6语法，个人项目中已全面使用ES6进行开发'},
    {list: '熟练使用chrome developer tools调试工具来调试代码'},
    {list: '熟练使用intellij idea、Sublime Text3等编辑器进行前端页面手工式的开发'},
    {list: '熟练使用Google、Stack Overflow等网站解决问题'},
];

const FRAMEWORKS = [
    {title: 'Frameworks & Tools'},
    {description: '熟悉jQuery api，能够编写出最基本的动态交互效果，并擅长用其封装日常的开发组件'},
    {description: '熟悉React、underscore等框架，对前端组件化有深入了解'},
    {description: '熟悉bootstrap、animation.css等css框架的使用'},
    {description: '熟练使用Git版本控制工具'},
    {description: '熟练使用Gulp、webpack等前端自动化构建工具'},
];

const LEARNING = [
    {title: 'Learning Experience'},
    {time1: 'Mar 2016 - Jun - 2016 慕课网'},
    {time2:'Aug 2016 - Dec 2016 网易云课堂'},
    {description1: 'HTML + CSS基础课程'},
    {description1: 'CSS网页布局'},
    {description1: '网页简单布局之结构与表现原则'},
    {description1: '导航条菜单制作'},
    {description1: 'JavaScript 入门 + 进阶'},
    {description1: 'DOM事件'},
    {description1: 'JQuery样式'},
    {description1: 'JQuery DOM'},
    {description2: '页面制作 HTML + CSS + 开发调试工具'},
    {description2: 'JavaScript 基础篇 + 进阶篇'},
    {description2: 'DOM编程艺术'},
    {description2: '页面架构'},
    {description2: '产品前端架构'},
    {homework: 'netEasyFrontEndHomework' ,description: '网易云课堂前端为专业作业及考试', type: 'HTML',light: '#e34c26', url: 'https://github.com/citylcs/netEasyFrontEndHomework'},
];

const PROJECT = [
    {title: 'Project'},
    {
        list: 'Victor-series-page',
        description: '网络加速服务类主页',
        type: 'HTML',
        light: '#e34c26',
        url: 'https://github.com/citylcs/Victor-series-page',
    },
    {
        list: 'toDoList',
        description: '原生JavaScript开发的todolist应用',
        type: 'JavaScript',
        light: '#f1e054',
        url: 'https://github.com/citylcs/toDoList',
    },
    {
        list: 'Calculation',
        description: '一个简单的、原生JavaScript制作的计算器',
        type: 'CSS',
        light: '#563d7c',
        url: 'https://github.com/citylcs/Calculation',
    },
    {
        list: 'React Demo',
        description: 'React.js框架下开发的带过滤功能的todolist应用',
        type: 'JavaScript',
        light: '#f1e054',
        url: 'https://github.com/citylcs/React-TODO',
    },
    {
        list: 'resume',
        description: 'React + SASS + Gulp + Webpack开发的个人简历',
        type: 'JavaScript',
        light: '#f1e054',
        url: 'https://github.com/citylcs/resume',
    },
];

function Resume(){
    return (
        <div>
            <TopBar />
            <div className="midContent">
                <QueueAnim duration={3000} delay={1500} animConfig={[
                    { opacity: [1, 0], translateY: [0, 50] },
                    { opacity: [1, 0], translateY: [0, -50] }
                ]}>
                    {
                        [
                            <div key="1"><Overview items={ITEMS} /></div>,
                            <div key="2"><Experience exp={EXP} /></div>,
                            <div key="3"><SkillOverview skillOver={SKILLOVER} /></div>,
                            <div key="4"><HTML html={HTML1} /></div>,
                            <div key="5"><Css css={CSS} /></div>,
                            <div key="6"><Js js={JS} /></div>,
                            <div key="7"><Frameworks frameworks={FRAMEWORKS} /></div>,
                            <div key="8"><LearningExperience learningExperience={LEARNING} /></div>,
                            <div key="9"><Project project={PROJECT} /></div>,
                        ]
                    }
                </QueueAnim>
            </div>
        </div>
    )
}

ReactDOM.render(
    <Resume />,
    document.getElementById('app')
);
