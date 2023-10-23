import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { vehicles } from '../../interface';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
interface BasicTabsProps {
  vehicle:vehicles;
}

export default function BasicTabs({vehicle}: BasicTabsProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label='Описание' {...a11yProps(0)} />
          <Tab label='Нация' {...a11yProps(1)} />
          <Tab label='Уровень' {...a11yProps(2)} />
          <Tab label='Тип' {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {vehicle.description}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      {vehicle.nation.name}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      {vehicle.level}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      {vehicle.type.name}
      </CustomTabPanel>
    </Box>
  );
}