import {useEffect, useState} from 'react';
import api from '../../../api_calls/api';
import {useIsFocused} from '@react-navigation/native';
export const useMemberDetail = () => {
  const [memberDetailData, setMemberDetailData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const isFocus = useIsFocused();
  const getProfile = () => {
    setIsLoading(true);
    api.getMemberDetails(1).then(response => {
      setIsLoading(false);
      setMemberDetailData(response.data.data.member_personal_details);
    });
  };
  useEffect(() => {
    if (isFocus) {
      getProfile();
    }
  }, [isFocus]);
  return {isLoading, memberDetailData};
};
