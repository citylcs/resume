var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import ReactDOM from 'react-dom';
// import './scss/style.scss'

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
                'Me'
            ),
            React.createElement(
                'li',
                null,
                React.createElement(
                    'a',
                    { href: './resume.html' },
                    'Resume'
                )
            )
        )
    );
}

var Photo = function (_React$Component) {
    _inherits(Photo, _React$Component);

    function Photo() {
        _classCallCheck(this, Photo);

        return _possibleConstructorReturn(this, (Photo.__proto__ || Object.getPrototypeOf(Photo)).apply(this, arguments));
    }

    _createClass(Photo, [{
        key: 'render',
        value: function render() {
            var photo = this.props.items.map(function (item) {
                return React.createElement('img', { src: item.imgSrc, id: 'photo' });
            });
            return React.createElement(
                'div',
                { id: 'photoWrap' },
                photo
            );
        }
    }]);

    return Photo;
}(React.Component);

var WellCome = function (_React$Component2) {
    _inherits(WellCome, _React$Component2);

    function WellCome() {
        _classCallCheck(this, WellCome);

        return _possibleConstructorReturn(this, (WellCome.__proto__ || Object.getPrototypeOf(WellCome)).apply(this, arguments));
    }

    _createClass(WellCome, [{
        key: 'render',
        value: function render() {
            var title = this.props.items.map(function (item) {
                return React.createElement(
                    'h1',
                    { id: 'wellCome' },
                    item.wellCome
                );
            });
            return React.createElement(
                'div',
                { id: 'wellComeWrap' },
                title
            );
        }
    }]);

    return WellCome;
}(React.Component);

function Icon() {
    return React.createElement(
        'div',
        { id: 'iconWrap' },
        React.createElement(
            'div',
            { id: 'icon1' },
            React.createElement('i', { className: 'icon-github icon-large' })
        ),
        React.createElement(
            'div',
            { id: 'icon2' },
            React.createElement('i', { className: 'icon-envelope-alt icon-large' })
        )
    );
}

var ITEMS = [{ wellCome: '你好，我是林楚城！' }, { imgSrc: 'img/icon.png' }];

var Me = function (_React$Component3) {
    _inherits(Me, _React$Component3);

    function Me() {
        _classCallCheck(this, Me);

        return _possibleConstructorReturn(this, (Me.__proto__ || Object.getPrototypeOf(Me)).apply(this, arguments));
    }

    _createClass(Me, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(TopBar, null),
                React.createElement(
                    'div',
                    { id: 'midContent' },
                    React.createElement(Photo, { items: this.props.items }),
                    React.createElement(WellCome, { items: this.props.items }),
                    React.createElement(Icon, null)
                )
            );
        }
    }]);

    return Me;
}(React.Component);

ReactDOM.render(React.createElement(Me, { items: ITEMS }), document.getElementById('container'));