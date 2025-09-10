import { Share2, Bookmark, Facebook, Twitter, Linkedin, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const SocialShare = () => {
  const [bookmarked, setBookmarked] = useState(false);
  
  const url = window.location.href;
  const title = "Carpet Installation Cost Calculator - Free Estimate Tool";
  const description = "Calculate carpet installation costs instantly with our free tool. Compare prices from Home Depot, Lowe's and more.";

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    // In a real app, you'd save this to localStorage or user preferences
  };

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    // Could add a toast notification here
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <div className="flex items-center gap-1 text-sm text-muted-foreground mr-2">
        <Share2 className="h-4 w-4 text-primary" />
        Share:
      </div>
      
      <Button 
        variant="outline" 
        size="sm" 
        onClick={() => window.open(shareLinks.facebook, '_blank')}
        className="gap-1"
      >
        <Facebook className="h-3 w-3 text-blue-600" />
        Facebook
      </Button>
      
      <Button 
        variant="outline" 
        size="sm" 
        onClick={() => window.open(shareLinks.twitter, '_blank')}
        className="gap-1"
      >
        <Twitter className="h-3 w-3 text-sky-500" />
        Twitter
      </Button>
      
      <Button 
        variant="outline" 
        size="sm" 
        onClick={() => window.open(shareLinks.linkedin, '_blank')}
        className="gap-1"
      >
        <Linkedin className="h-3 w-3 text-blue-700" />
        LinkedIn
      </Button>
      
      <Button 
        variant="outline" 
        size="sm" 
        onClick={copyLink}
        className="gap-1"
      >
        <Link className="h-3 w-3 text-gray-600" />
        Copy Link
      </Button>
      
      <Button 
        variant={bookmarked ? "default" : "outline"} 
        size="sm" 
        onClick={handleBookmark}
        className="gap-1"
      >
        <Bookmark className={`h-3 w-3 ${bookmarked ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} />
        {bookmarked ? 'Bookmarked' : 'Bookmark'}
      </Button>
    </div>
  );
};