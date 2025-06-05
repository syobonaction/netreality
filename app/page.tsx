import Desktop from "./components/ui/Desktop";
import Display from "./components/ui/Display";
import WindowWrapper from "./components/ui/WindowWrapper";

export default function Home() {
  return (
    <Display>
      <Desktop />
      <WindowWrapper pos={{x: 100, y: 100}} dim={{w: 400, h: 600}}>
        <div>TEST</div>
      </WindowWrapper>
    </Display>
  );
}
