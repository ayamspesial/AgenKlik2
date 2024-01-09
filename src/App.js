// Merged code without conflict markers
import React from 'react';
import Header from './Header';
import HomePage from './AgenHome';
import Listing from './DetailedProfile';
import Form from './Apply';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Payment from './Payment';
import Pembantu from './pembantu';
import Supir from './supir';
import BabySitter from './babysitter'
import PenajakHewan from "./penajak-hewan";
import PerawatLansia from "./perawat-lansia";
import TukangKebun from './tukang-kebun';
import SearchResult from './SeachBar';

function App() {
    return (
        <>
            <Header />
            <div className='content'>
                <Routes>
                    <Route path='/Home' element={<HomePage />} />
                    <Route path='/Listing' element={<Listing />} />
                    <Route path='/hiring' element={<Form />} />
                    <Route path='/pembantu' element={<Pembantu />} />
                    <Route path='/supir' element={<Supir />} />
                    <Route path='/baby-sitter' element={<BabySitter />} />
                    <Route path='/perawat-lansia' element={<PerawatLansia />} />
                    <Route path='/penajak-hewan' element={<PenajakHewan />} />
                    <Route path='/tukang-kebun' element={<TukangKebun />} />
                    <Route path='SearchResult' element={<SearchResult />} />
                    <Route path='/Listing/payment' element={<Payment />} />
                </Routes>
            </div>
        </>
    );
}

export default App;

