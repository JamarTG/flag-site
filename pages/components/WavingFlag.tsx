import React from "react";

export default function WavingFlag(countrySrc: { countrySrc: string }) {
  console.log(countrySrc);
  return (
    <>
      <style jsx>
        {`
        .wrapper {
          background-image: url(${countrySrc.countrySrc});
        }
      `}
      </style>

      <div className="wrapper">
        <div className="s s0">
          <div className="s s1">
            <div className="s s2">
              <div className="s s3">
                <div className="s s4">
                  <div className="s s5">
                    <div className="s s6">
                      <div className="s s7">
                        <div className="s s8">
                          <div className="s s9">
                            <div className="s s10">
                              <div className="s s11">
                                <div className="s s12">
                                  <div className="s s13">
                                    <div className="s s14">
                                      <div className="s s15">
                                        <div className="s s16">
                                          <div className="s s17">
                                            <div className="s s18">
                                              <div className="s s19">
                                                <div className="s s20">
                                                  <div className="s s21">
                                                    <div className="s s22">
                                                      <div className="s s23">
                                                        <div className="s s24"></div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
