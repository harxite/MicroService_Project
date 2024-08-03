FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["service1/service1.csproj", "service1/"]
RUN dotnet restore "service1/service1.csproj"
COPY . .
WORKDIR "/src/service1"
RUN dotnet build "service1.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "service1.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "service1.dll"]
