export interface Conversation {
  id: string;
  avatar: string;
  name: string;
  lastConversation: string;
}

export interface PlatformSetting {
  label: string;
  field: string;
}

export interface AccountSettingData {
  [key: string]: boolean;
  emailMentions: boolean;
  emailFollowing: boolean;
  emailAnswerPost: boolean;
}

export interface ApplicationSettingData {
  [key: string]: boolean;
  newLaunchesProject: boolean;
  monthlyProductUpdate: boolean;
  subscribeToNewsletter: boolean;
}

export interface SocialLink {
  facebook: string;
  twitter: string;
  instagram: string;
}
