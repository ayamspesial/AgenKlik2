import React from 'react';
import { useLocation } from 'react-router-dom';
import Pembantu from './pembantu';
import Supir from './supir';
import BabySitter from './babysitter';
import PerawatLansia from './perawat-lansia';
import PenajakHewan from './penajak-hewan';
import TukangKebun from './tukang-kebun';

export default function Categories() {
 const location = useLocation();

 const renderSwitch = (path) => {
    switch (path) {
      case '/services/pembantu':
        return <Pembantu/>;
      case '/services/supir':
        return <Supir />;
      case '/services/baby-sitter':
        return <BabySitter />;
      case '/services/perawat-lansia':
        return <PerawatLansia />;
      case '/services/penajak-hewan':
        return <PenajakHewan />;
      case '/services/tukang-kebun':
        return <TukangKebun />;
      default:
        return <div>Not Found</div>;
    }
 };

 return (
    <div>
      <h1>hi</h1>
      {renderSwitch(location.pathname)}
    </div>
 );
}