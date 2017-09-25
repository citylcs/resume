import React from 'react'
import ReactDOM from 'react-dom'
// import './scss/style.scss'

// function TopBar() {
//     return (
//         <div className="menu">
//             <ul className="menu_content">
//                 <li>Me</li>
//                 <li><a href="./resume.html">Resume</a></li>
//             </ul>
//         </div>
//     )
// }

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
                            <li>Me</li>
                            <li><a href="./resume.html">Resume</a></li>
                        </ul> :
                        <ul className="menu_content">
                            <li>Me</li>
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
        let photo = this.props.items.map((item, index) => {
            return <img key={index} src={item.imgSrc} id="photo" />
        });
        return (
            <div id="photoWrap">
                {photo}
            </div>
        )
    }
}

class WellCome extends React.Component {
    render() {
        let title = this.props.items.map((item, index) => {
            return <h1 id="wellCome" key={index}>{item.wellCome}</h1>
        });
        return (
            <div id="wellComeWrap">{title}</div>
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
                        <h3>citylcs@gmail.com</h3>
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
                    <Photo items={this.props.items} />
                    <WellCome items={this.props.items} />
                    <Icon />
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Me items={ITEMS} />,
    document.getElementById('container')
);