require "wasmtime"

engine = Wasmtime::Engine.new
mod = Wasmtime::Module.new(engine, <<~'WAT')
(module
 (type $0 (func (result i32)))
 (memory $0 1)
 (data $0 (i32.const 1036) "\1c")
 (data $0.1 (i32.const 1048) "\02\00\00\00\n\00\00\00h\00e\00l\00l\00o")
 (export "run" (func $module/run))
 (export "memory" (memory $0))
 (func $module/run (result i32)
  i32.const 1056
 )
)
WAT

store = Wasmtime::Store.new(engine, {count: 0})
instance = Wasmtime::Instance.new(store, mod, [])

run do |env|
  v = instance.invoke("run")
  p ["v=", v]
  [200, {"content-type" => "text/plain"}, [v]]
end