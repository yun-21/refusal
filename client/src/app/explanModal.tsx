import { Modal, Box } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  height: 150,
  bgcolor: 'background.paper',
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};

interface check {
  open: boolean;
  close: () => void;
}
const ExplanStartModal: React.FC<check> = ({ open, close }) => {
  return (
    <Modal open={open} onClose={close}>
      <Box sx={style}>
        <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          
        </div>
      </Box>
    </Modal>
  )
}
export default ExplanStartModal;