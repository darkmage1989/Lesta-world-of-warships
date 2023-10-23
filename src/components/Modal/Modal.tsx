import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useState } from 'react';
import BasicTabs from '../Tabs/Tabs';
import { vehicles } from '../../interface';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
interface KeepMountedModalProps {
  vehicle:vehicles;
}
export default function KeepMountedModal({vehicle}: KeepMountedModalProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Читать подробности</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
            <BasicTabs vehicle={vehicle}/>
            <Button onClick={handleClose}>Закрыть</Button>
        </Box>
      </Modal>
    </div>
  );
}