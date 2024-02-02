function MacTerminal() {
  return (
    <div className="w-900 font-mac-terminal text-lg">
      <div className="flex h-8 w-full items-center justify-start rounded-t-2xl bg-mac-header px-3">
        <span className="mr-2 block h-4 w-4 rounded-full bg-mac-btn-red"></span>
        <span className="mr-2 block h-4 w-4 rounded-full bg-mac-btn-yellow"></span>
        <span className="block h-4 w-4 rounded-full bg-mac-btn-green"></span>
      </div>
      <div className="w-full space-y-6 rounded-b-2xl bg-mac-body px-12 py-10">
        <div className="">
          <div className="text-mac-text-white">{`> austin.currentLocation`}</div>
          <div className="text-mac-text-yellow">
            "San Francisco, California"
          </div>
        </div>
        <div className="">
          <div className="text-mac-text-white">{`> austin.contactInfo`}</div>
          <div className="text-mac-text-yellow">
            ["austin.cavanagh.cs@gmail.com, LinkedIn, GitHub"]
          </div>
        </div>
        <div className="">
          <div className="text-mac-text-white">{`> austin.resume`}</div>
          <div className="text-mac-text-yellow">"austin.cavanagh.pdf"</div>
        </div>
        <div className="">
          <div className="text-mac-text-white">{`> austin.education`}</div>
          <div className="text-mac-text-yellow">
            "B.S. Business Administration - University of California, Berkeley"
          </div>
        </div>
        <div className="">
          <div className="text-mac-text-white">{`> austin.interests`}</div>
          <div className="text-mac-text-yellow">
            ["training my dog", "riding motorcylces", "snowboarding","chess"]
          </div>
        </div>
        {/* <div className="">
          <div className="text-mac-text-white">{`> Austin.currentLocation`}</div>
          <div className="text-mac-text-yellow">
            "B.S. Business Administration - University of California, Berkeley"
          </div>
        </div> */}
        <div className="flex items-center">
          <span className="text-mac-text-white">{'>'}</span>
          <span
            className={
              'blink ml-1 ml-2 inline-block h-full w-3 bg-mac-text-blink'
            }
          >
            &#8203;
          </span>
        </div>
      </div>
    </div>
  );
}

export default MacTerminal;
