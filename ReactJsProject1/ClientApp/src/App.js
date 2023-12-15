import React from 'react';
import { Routes, Route,Switch } from 'react-router-dom'; 
import AdminLayout from './AdminLayout/AdminLayout';
import Category from './components/Category';
import { ConfigProvider } from "antd";

const antDesignConfig = {
    token: { colorPrimary: "#00b96b" },
};
function App() {
    return (
        //<Routes>
        //    <Route path="/"  component={<AdminLayout />}>
        //        <Route path="/category" component={<Category />} />
        //    </Route>
        //</Routes>
        <ConfigProvider theme={antDesignConfig}>
        <AdminLayout>
            <Routes >
                <Route exact path="/" component={Category} />

            </Routes>
            </AdminLayout>
        </ConfigProvider>
        //<Category />
        //<AdminLayout/>
    );
}

export default App;
