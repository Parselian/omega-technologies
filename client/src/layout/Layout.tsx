import {Layout} from 'antd'
import "./Layout.scss"
import React, {FunctionComponent} from "react"
import {LayoutProps} from "./Layout.props"
import {Link} from "react-router-dom";
const {Header, Sider, Content, Footer} = Layout

const CustomLayout = ({children}: LayoutProps) => {
    return (
        <Layout className="app">
            <Header className="header">
                Omega technologies
            </Header>
            <Layout>
                <Sider theme="light" className="sidebar">
                    <nav className="sidebar__menu">
                        <Link className="sidebar__menu-item" to={'/'}>Catalog</Link>
                        <Link className="sidebar__menu-item" to={'/cart'}>Cart</Link>
                        <Link className="sidebar__menu-item" to={'/admin'}>Admin</Link>
                    </nav>
                </Sider>
                <Content className="content">
                    {children}
                </Content>
            </Layout>
            <Footer className="footer">
                footer
            </Footer>
        </Layout>
    )
}

const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function WithLayoutComponent(props: T): JSX.Element {
        return (
            <CustomLayout>
                <Component {...props}/>
            </CustomLayout>
        )
    }
}

export default withLayout