function MacTerminal() {
  return (
    <div className="w-900 text-lg font-mac-terminal font-light">
      <div className="h-8 w-full bg-mac-header rounded-t-2xl"></div>
      <div className="w-full bg-mac-body p-12 rounded-b-2xl space-y-6">
        <div className="">
          <div className="text-mac-text-white">{`> Justin.currentLocation`}</div>
          <div className="text-mac-text-yellow" style={{ fontWeight: 100 }}>
            "B.S. Business Administration - University of California, Berkeley"
          </div>
        </div>
        <div className="">
          <div className="text-mac-text-white">{`> Justin.currentLocation`}</div>
          <div className="text-mac-text-yellow">["j.chi2241@gmail.com"]</div>
        </div>
        <div className="">
          <div className="text-mac-text-white">{`> Justin.currentLocation`}</div>
          <div className="text-mac-text-yellow">
            "B.S. Business Administration - University of California, Berkeley"
          </div>
        </div>
        <div className="">
          <div className="text-mac-text-white">{`> Justin.currentLocation`}</div>
          <div className="text-mac-text-yellow">
            "B.S. Business Administration - University of California, Berkeley"
          </div>
        </div>
        <div className="">
          <div className="text-mac-text-white">{`> Justin.currentLocation`}</div>
          <div className="text-mac-text-yellow">
            "B.S. Business Administration - University of California, Berkeley"
          </div>
        </div>
        <div className="">
          <div className="text-mac-text-white">{`> Justin.currentLocation`}</div>
          <div className="text-mac-text-yellow">
            "B.S. Business Administration - University of California, Berkeley"
          </div>
        </div>
        <div className="">
          <span className="text-mac-text-white">{'>'}</span>
          <span
            className={'inline-block w-3 h-full bg-mac-text-blink ml-1 blink'}
          >
            &#8203;
          </span>
        </div>
      </div>
    </div>
  );
}

export default MacTerminal;
