'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BuildItApp = function (_React$Component) {
    _inherits(BuildItApp, _React$Component);

    function BuildItApp(props) {
        _classCallCheck(this, BuildItApp);

        var _this = _possibleConstructorReturn(this, (BuildItApp.__proto__ || Object.getPrototypeOf(BuildItApp)).call(this, props));

        _this.showDetails = _this.showDetails.bind(_this);
        _this.state = {
            title: 'Toggle Details',
            details: '',
            showButton: 'Show Details',
            visible: false
        };
        return _this;
    }

    _createClass(BuildItApp, [{
        key: 'showDetails',
        value: function showDetails() {
            if (!this.state.visible) {
                this.setState(function (prevState) {
                    return {
                        showButton: 'Hide Details',
                        visible: !prevState.visible,
                        details: 'These are some details YAY'
                    };
                });
            } else {
                this.setState(function (prevState) {
                    return {
                        showButton: 'Show Details',
                        visible: !prevState.visible,
                        details: ''
                    };
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.state.title
                ),
                React.createElement(
                    'button',
                    { onClick: this.showDetails },
                    this.state.showButton
                ),
                React.createElement(
                    'p',
                    null,
                    this.state.details
                )
            );
        }
    }]);

    return BuildItApp;
}(React.Component);

ReactDOM.render(React.createElement(BuildItApp, null), document.getElementById('app'));

// const app = {
//         title: 'Toggle Details',
//         details:'These are some details YAY',
//         visible:false
// }


// const showDetails = () => {
//     app.visible = !app.visible
//     rerender();
// };


// const appRoot = document.getElementById('app');

// const  rerender = () =>{
//     //JSX - JavaScript XML
//     const template = (
//         <div>  
//             <h1>{app.title}</h1>
//             <button  onClick={showDetails}>{app.visible ? 'Hide Details' : 'Show Details'}</button>
//              {app.visible && <p>{app.details}</p>}
//         </div>
//     ); 
//     ReactDOM.render(template, appRoot)
// }
// rerender();
