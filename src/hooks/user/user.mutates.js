import { useMutation, useQueryClient } from 'react-query';

import { userAPI } from '../../api/user';

/**
 * @description 登入
 * @returns {Object} mutation object
 */
export const useUserLoginMutates = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params) => userAPI.login(params),
    onSuccess: () => {}
  });
};
