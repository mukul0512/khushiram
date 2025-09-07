"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface GitHubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
  name: string;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  hireable: boolean | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

interface DataItem {
  label: string;
  value: string | number | null | undefined;
  isLink?: boolean;
  href?: string;
}

const URL = "https://api.github.com/users/mukul0512";

const fetchData = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
  return data;
};

const CustomClient = () => {
  const [postData, setPostData] = useState<GitHubUser | null>(null);

  const dataSections: { title: string; items: DataItem[] }[] = [
    {
      title: "Basic Info",
      items: [
        { label: "ID", value: postData?.id },
        { label: "Node ID", value: postData?.node_id },
        { label: "Type", value: postData?.type },
        { label: "Site Admin", value: postData?.site_admin ? "Yes" : "No" },
      ],
    },
    {
      title: "Contact & Links",
      items: [
        { label: "Company", value: postData?.company },
        { label: "Location", value: postData?.location },
        { label: "Blog", value: postData?.blog, isLink: true },
        {
          label: "Twitter",
          value: postData?.twitter_username
            ? `@${postData.twitter_username}`
            : null,
        },
        {
          label: "GitHub",
          value: "View Profile",
          isLink: true,
          href: postData?.html_url,
        },
      ],
    },
    {
      title: "Statistics",
      items: [
        { label: "Public Repos", value: postData?.public_repos },
        { label: "Public Gists", value: postData?.public_gists },
        { label: "Followers", value: postData?.followers },
        { label: "Following", value: postData?.following },
      ],
    },
    {
      title: "Dates",
      items: [
        {
          label: "Created",
          value: postData?.created_at
            ? new Date(postData.created_at).toLocaleDateString()
            : "N/A",
        },
        {
          label: "Updated",
          value: postData?.updated_at
            ? new Date(postData.updated_at).toLocaleDateString()
            : "N/A",
        },
      ],
    },
  ];

  useEffect(() => {
    console.log("CustomClient component mounted");
    const loadData = async () => {
      const data = await fetchData();
      setPostData(data);
    };
    loadData();
  }, []);

  return (
    <>
      <h3>CustomClient component</h3>
      <div className="p-4 border rounded-lg">
        <div className="flex items-center gap-4 mb-4">
          {postData?.avatar_url && (
            <Image
              src={postData.avatar_url}
              alt={`${postData.name} avatar`}
              width={100}
              height={100}
              className="rounded-full"
            />
          )}
          <div>
            <h4 className="text-xl font-bold">{postData?.name}</h4>
            <p className="text-gray-600">@{postData?.login}</p>
            {postData?.bio && <p className="text-sm">{postData.bio}</p>}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          {dataSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h5 className="font-semibold mb-2">{section.title}</h5>
              <ul className="space-y-1">
                {section.items.map((item, itemIndex) => {
                  if (!item.value) return null;
                  return (
                    <li key={itemIndex}>
                      <strong>{item.label}:</strong>{" "}
                      {item.isLink ? (
                        <Link
                          href={item.href || String(item.value)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {item.value}
                        </Link>
                      ) : (
                        item.value
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CustomClient;
