export interface Episode {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  pubDate: string;
  duration: string;
  audioUrl: string;
  imageUrl?: string;
  episodeNumber?: number;
  season?: number;
}

export interface PodcastFeed {
  title: string;
  description: string;
  link: string;
  image?: string;
  author?: string;
  email?: string;
  episodes: Episode[];
}

export interface PlatformLink {
  name: string;
  url: string;
  icon: string;
}
