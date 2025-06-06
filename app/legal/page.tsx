export default function LegalPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              利用規約・<span className="text-red-500">個人情報保護</span>
            </h1>
            <p className="text-xl text-gray-300">ZettAIのサービス利用に関する規約と個人情報の取り扱いについて</p>
          </div>

          <div className="space-y-12">
            {/* 利用規約 */}
            <section className="bg-gray-900 rounded-lg p-8 border border-gray-700">
              <h2 className="text-3xl font-bold mb-6 text-red-500">利用規約</h2>

              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">第1条（適用）</h3>
                  <p>
                    本利用規約（以下「本規約」）は、株式会社ZettAI（以下「当社」）が提供するサービス（以下「本サービス」）の利用条件を定めるものです。
                    登録ユーザーの皆さま（以下「ユーザー」）には、本規約に従って、本サービスをご利用いただきます。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">第2条（利用登録）</h3>
                  <p>
                    本サービスにおいては、登録希望者が本規約に同意の上、当社の定める方法によって利用登録を申請し、
                    当社がこれを承認することによって、利用登録が完了するものとします。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">第3条（ユーザーIDおよびパスワードの管理）</h3>
                  <p>
                    ユーザーは、自己の責任において、本サービスのユーザーIDおよびパスワードを適切に管理するものとします。
                    ユーザーは、いかなる場合にも、ユーザーIDおよびパスワードを第三者に譲渡または貸与し、
                    もしくは第三者と共用することはできません。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">第4条（禁止事項）</h3>
                  <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>法令または公序良俗に違反する行為</li>
                    <li>犯罪行為に関連する行為</li>
                    <li>
                      当社、本サービスの他のユーザー、または第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為
                    </li>
                    <li>当社のサービスの運営を妨害するおそれのある行為</li>
                    <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                    <li>不正アクセスをし、またはこれを試みる行為</li>
                    <li>他のユーザーに成りすます行為</li>
                    <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                    <li>その他、当社が不適切と判断する行為</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">第5条（本サービスの提供の停止等）</h3>
                  <p>
                    当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                    <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                    <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                    <li>その他、当社が本サービスの提供が困難と判断した場合</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">第6条（著作権）</h3>
                  <p>
                    ユーザーは、自ら著作権等の必要な知的財産権を有するか、または必要な権利者の許諾を得た文章、画像や映像等の情報に関してのみ、本サービスを利用し、投稿ないしアップロードすることができるものとします。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">第7条（利用制限および登録抹消）</h3>
                  <p>
                    当社は、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、投稿データを削除し、ユーザーに対して本サービスの全部もしくは一部の利用を制限しまたはユーザーとしての登録を抹消することができるものとします。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">第8条（免責事項）</h3>
                  <p>
                    当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">第9条（サービス内容の変更等）</h3>
                  <p>
                    当社は、ユーザーへの事前の告知をもって、本サービスの内容を変更、追加または廃止することがあり、ユーザーはこれを承諾するものとします。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">第10条（利用規約の変更）</h3>
                  <p>
                    当社は以下の場合には、ユーザーの個別の同意を要せず、本規約を変更することができるものとします。
                    本規約の変更がユーザーの一般の利益に適合するとき。
                    本規約の変更が本サービス利用契約の目的に反せず、かつ、変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものであるとき。
                  </p>
                </div>
              </div>
            </section>

            {/* 個人情報保護方針 */}
            <section className="bg-gray-900 rounded-lg p-8 border border-gray-700">
              <h2 className="text-3xl font-bold mb-6 text-emerald-400">個人情報保護方針</h2>

              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">基本方針</h3>
                  <p>
                    株式会社ZettAI（以下「当社」）は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、
                    全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">個人情報の管理</h3>
                  <p>
                    当社は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、
                    セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">個人情報の利用目的</h3>
                  <p>
                    お客さまからお預かりした個人情報は、当社からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">個人情報の第三者への開示・提供の禁止</h3>
                  <p>
                    当社は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>お客さまの同意がある場合</li>
                    <li>お客さまが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合</li>
                    <li>法令に基づき開示することが必要である場合</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">個人情報の安全対策</h3>
                  <p>当社は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">ご本人の照会</h3>
                  <p>
                    お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">法令、規範の遵守と見直し</h3>
                  <p>
                    当社は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">お問い合せ</h3>
                  <p>当社の個人情報の取扱に関するお問い合せは下記までご連絡ください。</p>
                  <div className="mt-4 p-4 bg-black rounded-lg">
                    <p>株式会社ZettAI</p>
                    <p>〒150-0001 東京都渋谷区神宮前1-1-1</p>
                    <p>TEL: 03-1234-5678</p>
                    <p>Email: privacy@zettai.ai</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Cookie使用について */}
            <section className="bg-gray-900 rounded-lg p-8 border border-gray-700">
              <h2 className="text-3xl font-bold mb-6 text-red-500">Cookie使用について</h2>

              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">Cookieとは</h3>
                  <p>
                    Cookieとは、ウェブサイトを利用したときに、ブラウザとサーバーとの間で送受信した利用履歴や入力内容などを、
                    お客様のコンピュータにファイルとして保存しておく仕組みです。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">Cookieの使用目的</h3>
                  <p>当社では、以下の目的でCookieを使用しています。</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>ウェブサイトの利便性を高めるため</li>
                    <li>ユーザーの行動パターンを分析し、サービス改善に役立てるため</li>
                    <li>広告配信の最適化のため</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">Cookieの管理</h3>
                  <p>
                    お客様はブラウザの設定により、Cookieの受け取りを拒否することができます。
                    ただし、その場合、当サイトの一部の機能が正常に動作しない可能性があります。
                  </p>
                </div>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
