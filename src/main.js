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
            touchBar: false,
            slideDown: false,
        }
    }

    handleClick() {
        this.setState(prevState => ({
            touchBar: !prevState.touchBar,
            slideDown: !prevState.slideDown,
        }));
    }

    render() {
        // let iconClass = this.state.touchBar ?
        //     <i className="icon-chevron-up"/> :
        //     <i className="icon-chevron-down"/>;

        return (
            <div className="menu">
                <ul className="menu_content">
                    <li>Me</li>
                    <li><a href="./resume.html">Resume</a></li>
                 </ul>
                <div onClick={this.handleClick}>
                    {
                        this.state.touchBar ? <i className="icon-chevron-up"/> : <i className="icon-chevron-down"/>
                    }
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

function Icon() {
    return (
        <div id="iconWrap">
            <div id="icon1"><i className="icon-github icon-large" /></div>
            <div id="icon2"><i className="icon-envelope icon-large" /></div>
        </div>
    )
}

const ITEMS = [
    {wellCome: '你好，我是林楚城！'},
    {imgSrc: 'src/img/icon.png'}
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