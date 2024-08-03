FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["service2/service2.csproj", "service2/"]
RUN dotnet restore "service2/service2.csproj"
COPY . .
WORKDIR "/src/service2"
RUN dotnet build "service2.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "service2.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "service2.dll"]
