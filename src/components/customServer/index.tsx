import Image from "next/image";
import Link from "next/link";

const CustomServer = async () => {
  const URL = "https://api.github.com/users/mukul0512";
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);

  const dataSections = [
    {
      title: "Profile Info",
      items: [
        { label: "Followers", value: data.followers },
        { label: "Following", value: data.following },
        { label: "Public Repos", value: data.public_repos },
      ],
    },
    {
      title: "Links",
      items: [
        { label: "Blog", value: data.blog, isLink: true, href: data.blog },
        { label: "Location", value: data.location },
        { label: "Company", value: data.company },
      ],
    },
  ];

  return (
    <>
      <h3>CustomServer component</h3>
      <div className="p-4 border rounded-lg">
        <div className="flex items-center gap-4 mb-4">
          {data?.avatar_url && (
            <Image
              src={data.avatar_url}
              alt={`${data.name} avatar`}
              width={100}
              height={100}
              className="rounded-full"
            />
          )}
          <div>
            <h4 className="text-xl font-bold">{data?.name}</h4>
            <p className="text-gray-600">@{data?.login}</p>
            {data?.bio && <p className="text-sm">{data.bio}</p>}
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

export default CustomServer;
