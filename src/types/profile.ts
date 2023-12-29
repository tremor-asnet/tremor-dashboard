export type ConversationHistory = {
  id: string;
  avatar: string;
  name: string;
  lastConversation: string;
};

export interface IPlatformSetting {
  label: string;
  field: string;
}

export type AccountSettingType = {
  [key: string]: boolean;
  emailMentions: boolean;
  emailFollowing: boolean;
  emailAnswerPost: boolean;
};

export type ApplicationSettingType = {
  [key: string]: boolean;
  newLaunchesProject: boolean;
  monthlyProductUpdate: boolean;
  subscribeToNewsletter: boolean;
};
