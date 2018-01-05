import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

function arrayMap(arr, key) {
    return arr.map((item) => {
        if (item[key]) {
            return item[key];
        }
    });
}

function multipleTextOutput(arr, key, tags, class_name) {//输出多个p标签组件
    return arr.map((item, index) => {
        if (item[key]) {
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
    });
}

function contentOutput(arr, key, tags, class_name) {
    return arr.map((item, index) => {
        if (item[key]) {
            if (tags === undefined && class_name === undefined) {
                return item[key];
            }
            else {
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

class Main extends React.Component{
    render() {
        let fuck = contentOutput(this.props.fake, 'description');
        let fuck2 = contentOutput(this.props.fake, 'name', 'p', 'caonima');
        let fuck3 = contentOutput(this.props.fake, 'name', 'li');
        return (
            <div>
                <h2>{fuck}</h2>
                {fuck2}
                <ul>{fuck3}</ul>
            </div>
        )
    }
}

const FAKE = [
    {name:'名字'},
    {name:'shawn T'},
    {name:'insanity'},
    {description:'说明'},
];

ReactDOM.render(
    <Main fake={FAKE}/>,
    document.getElementById('hh')
);



