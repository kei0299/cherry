oden_ranking = {
  6 => "ちくわぶ",
  5 => "たまご",
  4 => "こんにゃく",
  3 => "はんぺん",
  2 => "牛スジ",
  1 => "大根"
}

puts "好きなおでんの具の順位を入力してください (1〜6):"
rank = gets.chomp.to_i

if oden_ranking.has_key?(rank)
  puts "変換結果: #{oden_ranking[rank]}"
else
  puts "無効な順位です。1〜6の数字を入力してください。"
end