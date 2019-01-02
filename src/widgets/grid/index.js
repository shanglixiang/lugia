import  React from 'react';
        import {Anchor,Grid} from '@lugia/lugia-web';
        import EditTables from '../../edit-table'; 
         import COL from '@lugia/lugia-web/dist/grid/lugia.col.zh-CN.json'; import ROW from '@lugia/lugia-web/dist/grid/lugia.row.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const BasicDemo =  require('./BasicDemo').default;  const OffsetDemo =  require('./OffsetDemo').default;  const OrderDemo =  require('./OrderDemo').default;  const FlexJustifyDemo =  require('./FlexJustifyDemo').default;  const FlexAlignDemo =  require('./FlexAlignDemo').default;  const FlexOrderDemo =  require('./FlexOrderDemo').default;  const ResponsiveDemo =  require('./ResponsiveDemo').default;  const GutterDemo =  require('./GutterDemo').default;  
        
        const { Link } = Anchor;
        const { Row,Col } = Grid;
        
        export default class ComDemo extends React.Component {
            render(){
                return(
                    <Row>
                        <Col span={20}>
                            <Title title={'Grid 栅格'} subTitle={'Grid'} desc={'栅格'} />
                            <Demo title={'基础栅格'} titleID={'grid-0'} code={<code>{ 'import React from \'react\';\nimport {Grid} from \'@lugia/lugia-web\';\nconst {Row, Col} = Grid;\n\nexport default class GridDemo extends React.Component {\n    render() {\n        return (\n            <div>\n                <Row>\n                    <Col span={6}>col-6</Col>\n                    <Col span={6}>col-6</Col>\n                    <Col span={6}>col-6</Col>\n                    <Col span={6}>col-6</Col>\n                </Row>\n            </div>\n        );\n    }\n}\n'}</code>} desc={'最简单的用法'}  demo={<BasicDemo />}></Demo><Demo title={'左右偏移'} titleID={'grid-1'} code={<code>{ 'import React from \'react\';\nimport {Grid} from \'@lugia/lugia-web\';\nconst {Row, Col} = Grid;\n\nexport default class GridDemo extends React.Component {\n    render() {\n        return (\n            <div>\n                <Row>\n                    <Col span={6} offset={6}>\n                        col-6 col-offset-6\n                    </Col>\n                    <Col span={6} offset={6}>\n                        col-6 col-offset-6\n                    </Col>\n                </Row>\n            </div>\n        );\n    }\n}\n'}</code>} desc={'可设置列的左右偏移值'}  demo={<OffsetDemo />}></Demo><Demo title={'栅格排序'} titleID={'grid-2'} code={<code>{ 'import React from \'react\';\nimport {Grid} from \'@lugia/lugia-web\';\nconst {Row, Col} = Grid;\n\nexport default class GridDemo extends React.Component {\n    render() {\n        return (\n            <div>\n                <Row>\n                    <Col span={18} push={6}>\n                        col-18 col-push-6\n                    </Col>\n                    <Col span={6} pull={18}>\n                        col-6 col-pull-18\n                    </Col>\n                </Row>\n            </div>\n        );\n    }\n}\n'}</code>} desc={'可通过设置 push pull 来排列 Col 的顺序'}  demo={<OrderDemo />}></Demo><Demo title={'flex 水平布局'} titleID={'grid-3'} code={<code>{ 'import React from \'react\';\nimport {Grid} from \'@lugia/lugia-web\';\nconst {Row, Col} = Grid;\nexport default class GridDemo extends React.Component {\n    render() {\n        return (\n            <div>\n                <Row type=\"flex\" justify=\"start\">\n                    <Col span={4}>col-4 justify-start</Col>\n                    <Col span={4}>col-4 justify-start</Col>\n                    <Col span={4}>col-4 justify-start</Col>\n                    <Col span={4}>col-4 justify-start</Col>\n                </Row>\n                <Row type=\"flex\" justify=\"center\">\n                    <Col span={4}>col-4 justify-center</Col>\n                    <Col span={4}>col-4 justify-center</Col>\n                    <Col span={4}>col-4 justify-center</Col>\n                    <Col span={4}>col-4 justify-center</Col>\n                </Row>\n                <Row type=\"flex\" justify=\"end\">\n                    <Col span={4}>col-4 justify-end</Col>\n                    <Col span={4}>col-4 justify-end</Col>\n                    <Col span={4}>col-4 justify-end</Col>\n                    <Col span={4}>col-4 justify-end</Col>\n                </Row>\n                <Row type=\"flex\" justify=\"spaceBetween\">\n                    <Col span={4}>col-4 justify-spaceBetween</Col>\n                    <Col span={4}>col-4 justify-spaceBetween</Col>\n                    <Col span={4}>col-4 justify-spaceBetween</Col>\n                    <Col span={4}>col-4 justify-spaceBetween</Col>\n                </Row>\n                <Row type=\"flex\" justify=\"spaceAround\">\n                    <Col span={4}>col-4 justify-spacAround</Col>\n                    <Col span={4}>col-4 justify-spacAround</Col>\n                    <Col span={4}>col-4 justify-spacAround</Col>\n                    <Col span={4}>col-4 justify-spacAround</Col>\n                </Row>\n            </div>\n        );\n    }\n}\n'}</code>} desc={'可通过justify设置Col 水平排列顺序'}  demo={<FlexJustifyDemo />}></Demo><Demo title={'flex 竖直对其'} titleID={'grid-4'} code={<code>{ 'import React from \'react\';\nimport {Grid} from \'@lugia/lugia-web\';\nconst {Row, Col} = Grid;\n\nexport default class GridDemo extends React.Component {\n    render() {\n        return (\n            <div>\n                <Row type=\"flex\" justify=\"start\" align=\"top\">\n                    <Col span={4}>\n                        <div style={{ height: 80 }}>col-4 align-top</div>\n                    </Col>\n                    <Col span={4}>\n                        <div style={{ height: 60 }}>col-4 align-top</div>\n                    </Col>\n                    <Col span={4}>\n                        <div style={{ height: 100 }}>col-4 align-top</div>\n                    </Col>\n                    <Col span={4}>\n                        <div style={{ height: 120 }}>col-4 align-top</div>\n                    </Col>\n                </Row>\n                <Row type=\"flex\" justify=\"center\" align=\"middle\">\n                    <Col span={4}>\n                        <div style={{ height: 80 }}>col-4 align-middle</div>\n                    </Col>\n                    <Col span={4}>\n                        <div style={{ height: 60 }}>col-4 align-middle</div>\n                    </Col>\n                    <Col span={4}>\n                        <div style={{ height: 100 }}>col-4 align-middle</div>\n                    </Col>\n                    <Col span={4}>\n                        <div style={{ height: 120 }}>col-4 align-middle</div>\n                    </Col>\n                </Row>\n                <Row type=\"flex\" justify=\"end\" align=\"bottom\">\n                    <Col span={4}>\n                        <div style={{ height: 80 }}>col-4 align-bottom</div>\n                    </Col>\n                    <Col span={4}>\n                        <div style={{ height: 60 }}>col-4 align-bottom</div>\n                    </Col>\n                    <Col span={4}>\n                        <div style={{ height: 100 }}>col-4 align-bottom</div>\n                    </Col>\n                    <Col span={4}>\n                        <div style={{ height: 120 }}>col-4 align-bottom</div>\n                    </Col>\n                </Row>\n\n            </div>\n        );\n    }\n}\n'}</code>} desc={'可通过align设置Col 垂直对齐方式'}  demo={<FlexAlignDemo />}></Demo><Demo title={'flex 排序'} titleID={'grid-5'} code={<code>{ 'import React from \'react\';\nimport {Grid} from \'@lugia/lugia-web\';\nconst {Row, Col} = Grid;\n\nexport default class GridDemo extends React.Component {\n    render() {\n        return (\n            <div>\n                <Row type=\"flex\" justify=\"center\">\n                    <Col span={4} order={3}>\n                        col-4 center-order-3\n                    </Col>\n                    <Col span={4} order={2}>\n                        col-4 center-order-2\n                    </Col>\n                    <Col span={4} order={1}>\n                        col-4 center-order-1\n                    </Col>\n                    <Col span={4} order={4}>\n                        col-4 center-order-4\n                    </Col>\n                </Row>\n            </div>\n        );\n    }\n}\n'}</code>} desc={'可通过order设置Col 的排序方式'}  demo={<FlexOrderDemo />}></Demo><Demo title={'响应式布局'} titleID={'grid-6'} code={<code>{ 'import React from \'react\';\nimport {Grid} from \'@lugia/lugia-web\';\nconst {Row, Col} = Grid;\n\nexport default class GridDemo extends React.Component {\n    render() {\n        return (\n            <div>\n                <Row>\n                    <Col span={6} xs={{ span: 4, offset: 2 }} xl={{ span: 5, offset: 1 }}>\n                        col-\n                    </Col>\n                    <Col span={6} xs={{ span: 4, offset: 2 }} xl={{ span: 5, offset: 1 }}>\n                        col-\n                    </Col>\n                    <Col span={6} xs={{ span: 4, offset: 2 }} xl={{ span: 5, offset: 1 }}>\n                        col-\n                    </Col>\n                    <Col span={6} xs={{ span: 4, offset: 2 }} xl={{ span: 5, offset: 1 }}>\n                        col-\n                    </Col>\n                </Row>\n            </div>\n        );\n    }\n}\n'}</code>} desc={'可预设六个响应尺寸：xs sm md lg xl  xxl。'}  demo={<ResponsiveDemo />}></Demo><Demo title={'栅格间隔'} titleID={'grid-7'} code={<code>{ 'import React from \'react\';\nimport {Grid} from \'@lugia/lugia-web\';\nconst {Row, Col} = Grid;\n\nexport default class GridDemo extends React.Component {\n    render() {\n        return (\n            <div>\n                <Row gutter={24}>\n                    <Col span={6}>\n                        <div style={{ background: \'rgba(0, 160, 233, 0.7)\' }}>col-6</div>\n                    </Col>\n                    <Col span={6}>\n                        <div style={{ background: \' #00a0e9\' }}>col-6</div>\n                    </Col>\n                    <Col span={6}>\n                        <div style={{ background: \'rgba(0, 160, 233, 0.7)\' }}>col-6</div>\n                    </Col>\n                    <Col span={6}>\n                        <div style={{ background: \' #00a0e9\' }}>col-6</div>\n                    </Col>\n                </Row>\n                <Row gutter={{ xs: 8, sm: 16, md: 24, xl: 24, lg: 24 }}>\n                    <Col span={6}>\n                        <div style={{ background: \'rgba(0, 160, 233, 0.7)\' }}>col-6</div>\n                    </Col>\n                    <Col span={6}>\n                        <div style={{ background: \' #00a0e9\' }}>col-6</div>\n                    </Col>\n                    <Col span={6}>\n                        <div style={{ background: \'rgba(0, 160, 233, 0.7)\' }}>col-6</div>\n                    </Col>\n                    <Col span={6}>\n                        <div style={{ background: \' #00a0e9\' }}>col-6</div>\n                    </Col>\n                </Row>\n            </div>\n        );\n    }\n}\n'}</code>} desc={'Col 的水平间隔，可预设响应式间隔'}  demo={<GutterDemo />}></Demo>
                            <EditTables dataSource={COL} /><EditTables dataSource={ROW} />
                        </Col>
                        <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'基础栅格'} href={'#grid-0'} /><Link title={'左右偏移'} href={'#grid-1'} /><Link title={'栅格排序'} href={'#grid-2'} /><Link title={'flex 水平布局'} href={'#grid-3'} /><Link title={'flex 竖直对其'} href={'#grid-4'} /><Link title={'flex 排序'} href={'#grid-5'} /><Link title={'响应式布局'} href={'#grid-6'} /><Link title={'栅格间隔'} href={'#grid-7'} />
                            </Anchor>
                        </Col>
                    </Row>
                );
            }
         }   
        
