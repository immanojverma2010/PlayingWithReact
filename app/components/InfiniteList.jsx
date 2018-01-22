import React from 'react';
import { infinite } from 'react-infinite';




function ListItem(props){


        return( <div className="infinite-list-item" style={
            {
                height: props.height,
                lineHeight: props.lineHeight,

            }
        } id={props.index}>
            <div style={{height: 50}} >
            List Item {props.index}
            </div>
        </div>);
    }
ListItem.defaultProps={
    height: 50,
    lineHeight: "50px"};

export default class InfiniteList extends React.Component{


  constructor(props) {
    super(props);

    this.state=  {
            elements: this.buildElements(0,5),
            isInfiniteLoading: false
        };
        this.handleInfiniteLoad=this.handleInfiniteLoad.bind(this)
  }


    buildElements(start, end) {
        var elements = [];
        for (var i = start; i < end; i++) {
            elements.push(<ListItem key={i} index={i}/>)
        }
        return elements;
    }

    handleInfiniteLoad() {
        var that = this;
        this.setState({
            isInfiniteLoading: true
        });
        setTimeout(function() {
            var elemLength = that.state.elements.length,
                newElements = that.buildElements(elemLength, elemLength + 5);
            that.setState({
                isInfiniteLoading: false,
                elements: that.state.elements.concat(newElements)
            });
        }, 1000);
    }

    elementInfiniteLoad() {
        return <div className="infinite-list-item">
            Loading...
        </div>;
    }

    render() {
        return (<Infinite elementHeight={51}
                         containerHeight={window.innerHeight}
                         infiniteLoadBeginEdgeOffset={200}
                         onInfiniteLoad={this.handleInfiniteLoad}
                         loadingSpinnerDelegate={this.elementInfiniteLoad()}
                         isInfiniteLoading={this.state.isInfiniteLoading}
                         timeScrollStateLastsForAfterUserScrolls={1000}
                         useWindowAsScrollContainer={true}
                         >
                    {this.state.elements}
                </Infinite>);
    }
}
