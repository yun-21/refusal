import { Modal, Button, Box } from '@mui/material';
import { useRouter } from "next/navigation";

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
const StartModal: React.FC<check> = ({ open, close }) => {
  const router = useRouter();
  const gameStart = () => {
    router.push('name_question')
  }
  return (
    <Modal open={open} onClose={close}>
      <Box sx={style}>
        <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button variant="contained" color="primary" onClick={close}>
            예
          </Button>
          <Button onClick={gameStart} variant="contained" color="error" style={{ marginLeft: 10 }}>
            아니요
          </Button>
        </div>
      </Box>
    </Modal>
  )
}
export default StartModal;