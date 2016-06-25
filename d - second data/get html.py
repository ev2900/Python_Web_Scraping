import mechanize

br = mechanize.Browser()
response = br.open("http://www.mpfa.org.hk/eng/public_registers/orso_schemes/ordetail.do?schId=000000000028618")
print response.read()