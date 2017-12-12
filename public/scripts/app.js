'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndesicionApp = function (_React$Component) {
    _inherits(IndesicionApp, _React$Component);

    function IndesicionApp(props) {
        _classCallCheck(this, IndesicionApp);

        var _this = _possibleConstructorReturn(this, (IndesicionApp.__proto__ || Object.getPrototypeOf(IndesicionApp)).call(this, props));

        _this.deleteOptions = _this.deleteOptions.bind(_this);
        _this.makeDecision = _this.makeDecision.bind(_this);
        _this.addOption = _this.addOption.bind(_this);

        _this.state = {
            options: []
        };
        return _this;
    }

    _createClass(IndesicionApp, [{
        key: 'deleteOptions',
        value: function deleteOptions() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'makeDecision',
        value: function makeDecision() {
            var myNum = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[myNum]);
        }
    }, {
        key: 'addOption',
        value: function addOption(option) {
            if (!option) {
                return 'Please enter a valid value';
            } else if (this.state.options.indexOf(option) > -1) {
                return option + ' already exists';
            }
            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(option)
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'Indecision App Version 1.0.4';
            var subtitle = 'Put your life in the hands of a computer!';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    makeDecision: this.makeDecision
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    removeAll: this.deleteOptions
                }),
                React.createElement(AddOption, {
                    addOption: this.addOption
                })
            );
        }
    }]);

    return IndesicionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    { id: 'title' },
                    this.props.title
                ),
                React.createElement(
                    'h2',
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    {
                        onClick: this.props.makeDecision,
                        disabled: !this.props.hasOptions
                    },
                    'What should I do?'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Option = function (_React$Component4) {
    _inherits(Option, _React$Component4);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'p',
                null,
                this.props.option
            );
        }
    }]);

    return Option;
}(React.Component);

var Options = function (_React$Component5) {
    _inherits(Options, _React$Component5);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.props.options.map(function (option) {
                    return React.createElement(Option, { key: option, option: option });
                }),
                React.createElement(Option, null),
                React.createElement(
                    'button',
                    { onClick: this.props.removeAll },
                    'Remove All'
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var AddOption = function (_React$Component6) {
    _inherits(AddOption, _React$Component6);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this6 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this6.submitMyForm = _this6.submitMyForm.bind(_this6);
        _this6.state = {
            error: undefined
        };
        return _this6;
    }

    _createClass(AddOption, [{
        key: 'submitMyForm',
        value: function submitMyForm(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            e.target.elements.option.value = '';
            var error = this.props.addOption(option);
            this.setState(function () {
                return {
                    error: error
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.submitMyForm },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndesicionApp, null), document.getElementById('app'));
