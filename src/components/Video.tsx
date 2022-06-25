import { DefaultUi, Player, Youtube } from "@vime/react";
import {
  DiscordLogo,
  Lightning,
  FileArrowDown,
  CaretRight,
  Image,
} from "phosphor-react";
import { useGetLessonBySlugQuery } from "../graphql/generated";
import { TailSpin } from "react-loader-spinner";

import "@vime/core/themes/default.css";

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    },
  });

  if (!data || !data.lesson) {
    return (
      <div className="flex-1">
        <div className="flex h-full w-full justify-center items-center">
          <TailSpin color="#81D8F7" height={80} width={80} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className=" flex justify-center mt-8">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                  src={data.lesson.teacher.avatarURL}
                  alt=""
                />

                <div>
                  <strong className="text-2xl block">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-gray-200 text-sm block">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="https://discord.com/oauth2/authorize?client_id=949331074079662180&redirect_uri=https%3A%2F%2Fdiscord-service.rocketseat.dev%2Fsignin%2Fdynamic-callback&response_type=code&scope=identify+email+guilds.join&state=ignite-lab"
              target="_blank"
              className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
            >
              <DiscordLogo size={24} />
              Discord Community
            </a>
            {data.lesson.challenge && (
              <a
                href={data.lesson.challenge.url}
                target="_blank"
                className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
              >
                <Lightning size={24} />
                Start the Challenge
              </a>
            )}
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-2">
          <a
            href="https://efficient-sloth-d85.notion.site/Material-complementar-86d4ef35af16471ebc3ae3eba1a378e5"
            target="_blank"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="p-6 leading-relaxed">
              <strong className="text-2xl">Complementary Material</strong>
              <p className="text-sm text-gray-200 mt-2">
                Access complementary material to accelerate your development
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>

          <a
            href="https://drive.google.com/drive/folders/1mxWnvlqmH7MbVRv2Na9xFNgCQCygM1iR"
            target="_blank"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <Image size={40} />
            </div>
            <div className="p-6 leading-relaxed">
              <strong className="text-2xl">Exclusive Wallpapers</strong>
              <p className="text-sm text-gray-200 mt-2">
                Download exclusive ignite lab wallpapers and customize your
                computer
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
