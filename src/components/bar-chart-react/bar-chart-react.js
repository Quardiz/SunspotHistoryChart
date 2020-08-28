import React, {Component} from 'react';
import * as d3 from "d3";
import './bar-chart-react.css';
import {BottomAxis} from '../axis/bottom-axis'
import {LeftAxis} from '../axis/left-axis'

export default class BarChartReact extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const padding = 50;
        const bar_width = 4;
        const spacing = 1;
        const w = this.props.maxElements * (bar_width + spacing) + 2*padding;
        const h = this.props.height == null ? 500 : this.props.height;
        const min = d3.min(this.props.data, (d) => d[0]);

        const xScale = d3.scaleLinear()
                .domain([min, min + this.props.maxElements])
                .range([padding, w - padding]);

        const yDataScale = d3.scaleLinear()
                .domain([0, this.props.max])
                .range([0, h - padding]);

        const yAxisScale = d3.scaleLinear()
                .domain([0, this.props.max])
                .range([h - padding, 0]);

        return <svg>
            <g transform={`translate(0, ${this.props.y})`}>
                {this.props.data.map(
                    (d, i) => {
                        return <rect
                            key={i}
                            x={i * (bar_width + spacing) + padding}
                            y={h - yDataScale(d[1])}
                            width={bar_width}
                            height={yDataScale(d[1])}
                            fill="black"
                            className="bar"
                            >
                            <title>{d[1]}</title>
                        </rect>;
                    }
                )}
                <g transform={`translate(0, ${h})`}>
                    <BottomAxis
                        domain={xScale.domain()}
                        range={xScale.range()}
                    />
                </g>
                <g transform={`translate(${padding}, ${padding})`}>
                    <LeftAxis
                        domain={yAxisScale.domain()}
                        range={yAxisScale.range()}
                    />
                </g>
            </g>
        </svg>;
    }
}