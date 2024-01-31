function MacTerminal() {
  return (
    <div className="w-900 text-lg font-mac-terminal">
      <div className="h-8 w-full bg-mac-header rounded-t-2xl flex justify-start items-center px-3">
        <span className="block w-4 h-4 bg-mac-btn-red rounded-full mr-2"></span>
        <span className="block w-4 h-4 bg-mac-btn-yellow rounded-full mr-2"></span>
        <span className="block w-4 h-4 bg-mac-btn-green rounded-full"></span>
      </div>
      <div className="w-full bg-mac-body py-10 px-12 rounded-b-2xl space-y-6">
        <div className="">
          <div className="text-mac-text-white">{`> Austin.currentLocation`}</div>
          <div className="text-mac-text-yellow">
            "San Francisco, California"
          </div>
        </div>
        <div className="">
          <div className="text-mac-text-white">{`> Austin.contactInfo`}</div>
          <div className="text-mac-text-yellow">
            ["austin.cavanagh.cs@gmail.com, LinkedIn, GitHub"]
          </div>
        </div>
        <div className="">
          <div className="text-mac-text-white">{`> Austin.resume`}</div>
          <div className="text-mac-text-yellow">"austin.cavanagh.pdf"</div>
        </div>
        <div className="">
          <div className="text-mac-text-white">{`> Austin.education`}</div>
          <div className="text-mac-text-yellow">
            "B.S. Business Administration - University of California, Berkeley"
          </div>
        </div>
        <div className="">
          <div className="text-mac-text-white">{`> Austin.interests`}</div>
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
              'inline-block w-3 h-full bg-mac-text-blink ml-1 blink ml-2'
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
