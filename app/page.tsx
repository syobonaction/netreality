import Desktop from "./components/ui/Desktop";
import Display from "./components/ui/Display";
import WindowWrapper from "./components/ui/WindowWrapper";

export default function Home() {
  return (
    <Display>
      <Desktop />
      <WindowWrapper>
        <div>TEST</div>
      </WindowWrapper>
    </Display>
  );
}
