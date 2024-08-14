import { Flex, Rate } from 'antd';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const Rating = ({rateInput,setRateInput,isRating}) => {
//   const [value, setValue] = useState(3);
  return (
    <Flex gap="middle" vertical>
        {isRating?
      <Rate disabled value={rateInput} />:
      <Rate tooltips={desc} onChange={setRateInput} value={rateInput} />}
    </Flex>
  );
};
export default Rating;