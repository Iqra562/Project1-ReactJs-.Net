import React from "react";
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    UserOutlined,
    LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

//const logoutClickHandler = (event) => {
//    event.preventDefault();
//    localStorage.removeItem(AuthUtilConstant.USER_TOKEN);
//    window.location.href = UnAuthenticatedRoutesNames.LOGIN;
//};
export const sidebarItems = [
    {
        icon: <PieChartOutlined />,
        label: <Link to="/">Dashboard</Link>,
        key: "dashboard",
    },
    {
        icon: <PieChartOutlined />,
        label: <Link to="">Categories</Link>,
        key: "categories",
    },

    {
        icon: <DesktopOutlined />,
        label: <Link to="">Posts</Link>,
        key: "posts",
    },

    {
        icon: <UserOutlined />,
        label: <Link to="">Users</Link>,
        key: "users",
    },
    {
        icon: <FileOutlined />,
        label: <Link to="/">Comments</Link>,
        key: "comments",
    },
    {
        icon: <LogoutOutlined />,
        label: <div>Logout</div>,
        key: "logout",
    },
];