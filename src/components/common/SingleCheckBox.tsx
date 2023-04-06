import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import constants from '../../constants';

interface SingleCheckBoxProps {
  value?: boolean;
  handleToggle: (val: boolean) => void;
}

const SingleCheckBox: React.FC<SingleCheckBoxProps> = props => {
  const [toggleCheckBox, setToggleCheckBox] = useState(props.value);
  const handleChange = (val: boolean) => {
    setToggleCheckBox(val);
    props.handleToggle(val);
  };

  return (
    // @ts-ignore
    <CheckBox
      disabled={false}
      value={toggleCheckBox}
      onValueChange={handleChange}
      tintColors={{
        true: constants.colors.primary,
        false: constants.colors.primary,
      }}
    />
  );
};
export default SingleCheckBox;
