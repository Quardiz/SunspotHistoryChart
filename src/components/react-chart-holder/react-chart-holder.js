import React, {Component} from 'react';
import * as d3 from "d3";
import BarChartReact from "../bar-chart-react/bar-chart-react"
import { max } from 'd3';
import './react-chart-holder.css';

const data = [[1700, 8], [1701, 18], [1702, 26], [1703, 38], [1704, 60], [1705, 96], [1706, 48], [1707, 33],
        [1708, 16], [1709, 13], [1710, 5], [1711, 0], [1712, 0], [1713, 3], [1714, 18], [1715, 45], [1716, 78], [1717, 105], [1718, 100], [1719, 65], [1720, 46], [1721, 43], [1722, 36], [1723, 18], [1724, 35], [1725, 66], [1726, 130], [1727, 203], [1728, 171], [1729, 121], [1730, 78], [1731, 58], [1732, 18], [1733, 8], [1734, 26], [1735, 56], [1736, 116], [1737, 135], [1738, 185], [1739, 168], [1740, 121], [1741, 66], [1742, 33], [1743, 26], [1744, 8], [1745, 18], [1746, 36], [1747,
        66], [1748, 100], [1749, 134], [1750, 139], [1751, 79], [1752, 79], [1753, 51], [1754, 20], [1755, 16], [1756, 17], [1757, 54], [1758, 79], [1759, 90], [1760, 104], [1761, 143], [1762, 102], [1763, 75], [1764, 60], [1765, 34], [1766, 19], [1767, 63], [1768, 116], [1769, 176], [1770, 168], [1771, 136], [1772, 110], [1773, 58], [1774, 51], [1775, 11], [1776, 33], [1777, 154], [1778,
        257], [1779, 209], [1780, 141], [1781, 113], [1782, 64], [1783, 38], [1784, 17], [1785, 40], [1786, 138], [1787, 220], [1788, 218], [1789, 196], [1790, 149], [1791, 111], [1792, 100], [1793, 78], [1794, 68], [1795, 35], [1796, 26], [1797, 10], [1798, 6], [1799, 11], [1800, 24], [1801, 56], [1802, 75], [1803, 71], [1804, 79], [1805, 70], [1806, 46], [1807, 16], [1808, 13], [1809, 4], [1810, 0], [1811, 2], [1812, 8], [1813, 20], [1814, 23], [1815, 59], [1816, 76], [1817, 68], [1818, 52], [1819, 38], [1820, 24], [1821, 9], [1822, 6], [1823, 2], [1824, 11], [1825, 28], [1826, 59], [1827, 83], [1828, 108], [1829, 115], [1830, 117], [1831, 80], [1832, 44], [1833, 13], [1834, 19], [1835, 85], [1836, 192], [1837, 227], [1838, 168], [1839, 143], [1840, 105], [1841, 63], [1842, 40], [1843, 18], [1844, 25], [1845, 65], [1846, 102], [1847, 166], [1848, 208], [1849, 182], [1850, 126], [1851, 122], [1852, 102], [1853, 74], [1854, 39], [1855, 12], [1856, 8], [1857, 43], [1858, 104], [1859, 178], [1860, 182], [1861, 146], [1862, 112], [1863, 83], [1864, 89], [1865, 57], [1866, 30], [1867, 13], [1868, 62], [1869, 123], [1870, 232], [1871, 185], [1872, 169], [1873, 110], [1874, 74], [1875, 28], [1876, 18], [1877, 20], [1878, 5], [1879, 10], [1880, 53], [1881, 90], [1882, 99], [1883, 106], [1884, 105], [1885, 86], [1886, 42], [1887, 21], [1888, 11], [1889, 10], [1890, 11], [1891, 59], [1892, 121], [1893, 142], [1894, 130], [1895, 106], [1896, 69], [1897, 43], [1898, 44], [1899, 20], [1900, 15], [1901, 4], [1902, 8], [1903, 40], [1904, 70], [1905, 105], [1906, 90], [1907, 102], [1908, 80], [1909, 73], [1910, 30], [1911, 9],
        [1912, 6], [1913, 2], [1914, 16], [1915, 79], [1916, 95], [1917, 173], [1918, 134], [1919, 105], [1920, 62], [1921, 43], [1922, 23], [1923, 9], [1924, 27], [1925, 74], [1926, 106], [1927, 114], [1928, 129], [1929, 108], [1930, 59], [1931, 35], [1932, 18], [1933, 9], [1934, 14], [1935, 60], [1936, 132], [1937, 190], [1938, 182], [1939, 148], [1940, 113], [1941, 79], [1942, 50], [1943, 27], [1944, 16], [1945, 55], [1946, 154], [1947, 214], [1948, 193], [1949, 190], [1950, 118], [1951, 98], [1952, 45], [1953, 20], [1954, 6], [1955, 54], [1956, 200], [1957, 269], [1958, 261], [1959, 225], [1960, 159], [1961, 76], [1962, 53], [1963, 39], [1964, 15], [1965, 22], [1966,
        66], [1967, 132], [1968, 150], [1969, 149], [1970, 148], [1971, 94], [1972, 97], [1973, 54], [1974, 49], [1975, 22], [1976, 18], [1977, 39], [1978, 131], [1979, 220], [1980, 218], [1981, 198], [1982, 162], [1983, 91], [1984, 60], [1985, 20], [1986, 14], [1987, 33], [1988, 123], [1989, 211], [1990, 191], [1991, 203], [1992, 133], [1993, 76], [1994, 44], [1995, 25], [1996, 11], [1997, 28], [1998, 88], [1999, 136], [2000, 173], [2001, 170], [2002, 163], [2003, 99], [2004, 65], [2005, 45], [2006, 24], [2007, 12], [2008, 4], [2009, 4], [2010, 24], [2011, 80], [2012, 84], [2013, 94], [2014, 113], [2015, 69], [2016, 39], [2017, 21], [2018, 7], [2019, 3]];

export default class ReactChartHolder extends Component {
    constructor(props){
        super(props);
        this.state = {
            vw: 0,
            vh: 0
        }
        this.updateSize = this.updateSize.bind(this);
    }
    componentDidMount(){
        this.updateSize();
        window.addEventListener('resize', this.updateSize);
    }
    updateSize(){
        let chartElement = document.getElementById("chart");
        this.setState(() => ({vw: chartElement.offsetWidth, vh: chartElement.offsetHeight}));
    }
    render(){
        const barWidth = 4;
        const spacing = 1;
        // const vw = window.innerWidth;
        // const vh = window.innerHeight;
        let vw = this.state.vw;
        let vh = this.state.vh;
        const margin = 50;
        const maxSunspots = d3.max(data, d => d[1]);

        const maxElements = Math.max((vw - 2*margin)/(barWidth+spacing), 1);
        const parts = Math.floor(data.length/maxElements) + 1;
        // Split data in equal parts, each containing less than {maxElements}
        let splitData = [];
        for(let i=0; i<parts; i++){
            if((i+1)*maxElements > data.length){
                splitData.push(data.slice(i*maxElements));
            } else {
                splitData.push(data.slice(i*maxElements, (i+1)*maxElements));
            }
        }
        
        if(this.state.vh == 0 || this.state.vw == 0){
            return <div id="holder">
            <text id="title">Average Yearly Sunspots</text>
            <div id="verticalTextHolder">
                <p id="verticalText">Amount of Sunspots</p>  
                <div id="chart">

                </div>
            </div>
            <p>Time in years</p>
        </div>
        } else {
            return <div id="holder">
                <text id="title">Average Yearly Sunspots</text>
                <div id="verticalTextHolder">
                    <p id="verticalText">Amount of Sunspots</p>  
                    <div id="chart">
                        <svg width="100%" height="100%">    
                            {splitData.map((myData, i) => <BarChartReact 
                                max={maxSunspots} 
                                maxElements={maxElements} 
                                key={i} 
                                data={myData} 
                                height={vh/parts} 
                                y={vh/parts*i-30}/>)}
                        </svg>
                    </div>
                </div>
                <p>Time in years</p>
            </div>;              
        }
    }
}