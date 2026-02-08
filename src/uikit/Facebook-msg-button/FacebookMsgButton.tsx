import type { FC } from 'react';
import { CustomChat, FacebookProvider } from 'react-facebook';

const FacebookMsgButton: FC = () => {
  return (
    <FacebookProvider appId="1097513178957163" chatSupport>
      <CustomChat pageId="523563084177101" minimized={true} />
    </FacebookProvider>
  );
};

export default FacebookMsgButton;
