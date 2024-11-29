import { Modal, Box } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  height: 500,
  bgcolor: 'background.paper',
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};

interface check {
  open: boolean;
  close: () => void;
}
const ExplainStartModal: React.FC<check> = ({ open, close }) => {
  return (
    <Modal open={open} onClose={close}>
      <Box sx={style}>
        <div className='text-black text-3xl font-black text-center shadow-md'>게임 설명</div>
        <div className='h-full flex justify-around items-center flex-col'>
          <div className='text-black'>질문을 보고 자신이 어떤 식으로 대답하는 것에 가까운 답변을 선택하여 다음으로 넘어가면 되는 것이다.</div>
          <div className='text-black'>거절을 잘 하는 사람인지 아닌지를 판단해주는 게임이다.</div>
        </div>
      </Box>
    </Modal>
  )
}
export default ExplainStartModal;