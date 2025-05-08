import Icon from "./Icon";

export default function Desktop() {
  return (
    <div className="w-screen h-screen absolute bg-[url(/img/star_bg.gif)]">
      <Icon 
        imageUrl="/icons/blog.png"
        name="Sismondi's Blog"
        alt="Sismondi's Blog"
      />
      <Icon 
        imageUrl="/icons/audio.png"
        name="Music Player"
        alt="Music Player"
      />
      <Icon 
        imageUrl="/icons/folder.png"
        name="Projects"
        alt="Projects"
      />
    </div>
  )
}