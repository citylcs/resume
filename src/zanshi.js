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
    {description: 'Sep 2016 - Dec 2016'},
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
    {time1: 'Aug 2016 - Oct 2016 慕课网'},
    {time2:'Oct 2016 - Dec 2016 网易云课堂'},
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
    {homework: 'netEasyFrontEndHomework' ,description: '网易云课堂前端微专业作业及考试', type: 'HTML',light: '#e34c26', url: 'https://github.com/citylcs/netEasyFrontEndHomework'},
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