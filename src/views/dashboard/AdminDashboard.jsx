import React from 'react';

import { 
  CRow, 
  CCol, 
  CCard, 
  CCardBody, 
  CCardHeader,
  CWidgetStatsA 
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilPeople, cilBook, cilMoney, cilSettings } from '@coreui/icons';
import { useAuth } from '../../context/AuthContext';

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <>
      <div className="mb-4">
        <h2>Admin Dashboard</h2>
        <p className="text-medium-emphasis">Welcome back, {user?.name}. Here is what is happening in your school today.</p>
      </div>

      {/* Top Stat Widgets */}
      <CRow>
        <CCol sm={6} lg={3}>
          <CWidgetStatsA
            className="mb-4 pb-3"
            color="primary"
            value="1,245"
            title="Total Students"
            action={<CIcon icon={cilPeople} className="text-white" size="xl" />}
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsA
            className="mb-4 pb-3"
            color="info"
            value="84"
            title="Total Teachers"
            action={<CIcon icon={cilBook} className="text-white" size="xl" />}
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsA
            className="mb-4 pb-3"
            color="warning"
            value="$12,500"
            title="Pending Fees"
            action={<CIcon icon={cilMoney} className="text-white" size="xl" />}
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsA
            className="mb-4 pb-3"
            color="danger"
            value="5"
            title="System Alerts"
            action={<CIcon icon={cilSettings} className="text-white" size="xl" />}
          />
        </CCol>
      </CRow>

      {/* Main Content Area */}
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Recent Activity</strong>
            </CCardHeader>
            <CCardBody>
              <p>This is where you can place data tables, charts, or recent logs for administrative actions.</p>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default AdminDashboard;