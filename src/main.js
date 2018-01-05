import React from 'react'
import ReactDOM from 'react-dom'
import QueueAnim from 'rc-queue-anim'

function contentOutput(arr, key, tags, class_name) {//输出数组内容组件
    return arr.map((item, index) => {
        if (item[key]) {
            if (tags === undefined && class_name === undefined) {//输出单个无标签内容
                return item[key];
            }
            else {//输出多个可选标签内容
                if (tags === 'p') {
                    return <p key={index} className={class_name}>{item[key]}</p>
                }
                else if (tags === 'li') {
                    return <li key={index} className={class_name}>{item[key]}</li>
                }
                else if (tags === 'span') {
                    return <span key={index} className={class_name}>{item[key]}</span>
                }
                else{}
            }
        }
    });
}

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
                            <li><a href="./index.html">Me</a></li>
                            <li><a href="./resume.html">Resume</a></li>
                        </ul> :
                        <ul className="menu_content">
                            <li><a href="./index.html">Me</a></li>
                            <li><a href="./resume.html">Resume</a></li>
                        </ul>
                }
                <div onClick={this.handleClick}>
                    <i className={this.state.isHidden ? 'icon-chevron-down down' : 'icon-chevron-down'} />
                </div>
            </div>
        )
    }
}

class Photo extends React.Component {
    render() {
        return (
            <div id="photoWrap">
                <img src="img/icon.png" id="photo" />
            </div>
        )
    }
}

class WellCome extends React.Component {
    render() {
        let title = contentOutput(this.props.items, 'wellCome');
        return (
            <div id="wellComeWrap">
                <h1 id="wellCome">{title}</h1>
            </div>
        )
    }
}

class Icon extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {isHidden: true}
    }

    handleClick() {
        this.setState(prevState => ({
            isHidden: !prevState.isHidden
        }));
    }

    render() {
        return (
            <div className="bigWrap">
                <div id="iconWrap">
                    <div id="icon1"><a href="https://github.com/citylcs"><i className="icon-github icon-large" /></a></div>
                    <div id="icon2"><i className="icon-envelope icon-large" onClick={this.handleClick} /></div>
                </div>
                <div className={this.state.isHidden ? 'hidden' : 'hidden unHidden'}>
                    <div className="hiddenWrap">
                        <h3><a href="mailto:citylcs@gmail.com">citylcs@gmail.com</a></h3>
                    </div>
                </div>
            </div>
        )
    }
}

const ITEMS = [
    {wellCome: '你好，我是林楚城！'},
    {imgSrc: 'img/icon.png'}
];

class Me extends React.Component {
    render() {
        return (
            <div>
                <TopBar />
                <div id="midContent">
                    <QueueAnim duration={2000} delay={1000} animConfig={[
                        { opacity: [1, 0], translateY: [0, 50] },
                        { opacity: [1, 0], translateY: [0, -50] }
                    ]}>
                        <div key="1"><Photo items={this.props.items} /></div>
                        <div key="2"><WellCome items={this.props.items} /></div>
                        <div key="3"><Icon /></div>
                    </QueueAnim>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Me items={ITEMS} />,
    document.getElementById('container')
);