export default function DownloadButton() {
  return (
    <div className="sticky bottom-4 flex justify-evenly gap-2">
      <a
        href="https://forms.gle/gusk9HruYnXQg9jPA"
        target="_blank"
        rel="noopener noreferrer"
        className="focus:ring-gray-200 rounded-full bg-white px-3 py-5 text-center text-sm font-bold shadow-[rgba(23,_38,_76,_0.19)_0px_0px_20px] focus:outline-none focus:ring-4"
      >
        ⚡お問い合わせ
      </a>
      <button className="focus:ring-gray-200 rounded-full bg-download-red px-3 py-5 text-center text-sm font-bold text-white shadow-[rgba(23,_38,_76,_0.19)_0px_0px_20px] focus:outline-none focus:ring-4">
        📱アプリをダウンロード
      </button>
    </div>
  )
}
